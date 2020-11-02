// ========================================
// Puerto
// ========================================
process.env.PORT = process.env.PORT || 3000;

// ========================================
// Entorno
// ========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ========================================
// Base de datos
// ========================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = 'mongodb://strider:JqHm7uzCdtTMmtRO@cluster0-shard-00-00.hx9z6.mongodb.net:27017,cluster0-shard-00-01.hx9z6.mongodb.net:27017,cluster0-shard-00-02.hx9z6.mongodb.net:27017/cafe?replicaSet=atlas-o0s4tb-shard-0&ssl=true&authSource=admin';
}

process.env.URLDB = urlDB;