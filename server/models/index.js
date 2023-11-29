const Sequelize = require('sequelize')
const db = {}

const connection = new Sequelize(
    'tree',
    'sa',
    '123',
    {
        logging: false,
        charset: 'utf8',
        collate: 'utf8_persian_ci',
        host: '192.168.1.158',
        dialect:'mysql',
        define: {
            timestamps: true,
            freezeTableName: true,
            underscored: false,
        },
        dialectOptions: {
            useUTC: true, //for reading from database
            dateStrings: true,
            instanceName: '',
            options: { "requestTimeout": 300000 }
            // typeCast: function (field, next) { // for reading from database
            //   if (field.type === 'DATETIME') {
            //     return field.string()
            //   }
            //     return next()
            //   },
        },
        // timezone : '+03:30',
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0 ,
            acquire:30000,
            idle: 10000,

        },
        trustServerCertificate: true,
    }
)

db.Sequelize = Sequelize
db.Op = Sequelize.Op
db.connection = connection


db.tree=require('./tree')(connection,Sequelize);
db.account=require('./account')(connection,Sequelize);

global.DB=db
module.exports=db