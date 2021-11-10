import { map } from "mssql";
import { getConnection, querys, sql } from "../database";

export const getOrders = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllOrders);
        result.recordset.map(async (record, index) => {
            const products = await pool.request().input("IdOrder", sql.Int, record.IdOrder).query(querys.getProductInOrder);
            result.recordset[index].items=products.recordset
            console.log(result.recordset[index])
        })
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewOrder = async (req, res) => {
    const { userName, items } = req.body;

    if (userName == null) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("stateOrder", sql.VarChar, "pending")
            .input("userName", sql.VarChar, userName)
            .query(querys.addNewOrders);
        items.map(async (item) => {

            await pool
                .request()
                .input("IdProduct", sql.Int, item.IdProduct)
                .input("IdOrder", sql.Int, '1')
                .input("qty", sql.Int, item.qty)
                .query(querys.addProductInOrder);
        })
        res.json({ userName, items });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const updateOrdersById = async (req, res) => {
    const { stateOrder } = req.body;

    if (stateOrder == null) {
        return res.status(400).json({ msg: " Please fill all fields" });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("stateOrder", sql.VarChar, stateOrder)
            .input("IdOrder", req.params.IdOrder)
            .query(querys.updateOrdersById);
        res.json({ stateOrder });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};