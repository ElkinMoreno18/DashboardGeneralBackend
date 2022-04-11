module.exports = {
    HOST: "10.10.101.18",
    PORT: "1433",
    USER: "cdrs_user",
    PASSWORD: "Temp1234",
    DB: "infCdrDB",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};