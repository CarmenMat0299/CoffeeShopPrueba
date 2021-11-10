import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { price, nameProduct, imageProduct } = req.body;

  if (price == null || nameProduct == null || imageProduct == null) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("price", sql.Int, price)
      .input("nameProduct", sql.VarChar, nameProduct)
      .input("imageProduct", sql.VarChar, imageProduct)
      .query(querys.addNewProduct);

    res.json({ price, nameProduct, imageProduct});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("IdProduct", req.params.IdProduct)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("IdProduct", req.params.IdProduct)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductById = async (req, res) => {
  const { price, nameProduct, imageProduct } = req.body;

  if ( price == null || nameProduct == null ||  imageProduct == null ) {
    return res.status(400).json({ msg: " Please fill all fields" });
  }

  try {

    const pool = await getConnection();
    await pool
      .request()
      .input("price", sql.Int, price)
      .input("nameProduct", sql.VarChar, nameProduct)
      .input("imageProduct", sql.VarChar, imageProduct)
      .input("IdProduct", req.params.IdProduct)
      .query(querys.updateProductById);
    res.json({ nameProduct, imageProduct, price });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};