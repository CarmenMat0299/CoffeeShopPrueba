import sql from "mssql"

const dbSettings = {
    user: '',
    password: '',
    server: 'DESKTOP-COGD6J7\\SQLEXPRESS',
    database:'CoffeeShopBD',
    options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
}

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}
export { sql };