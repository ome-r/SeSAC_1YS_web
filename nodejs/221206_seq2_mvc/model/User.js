
const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "myuser", 
        {
            id: {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey: true
            },
            pw: {
                type : DataTypes.STRING(10),
                allowNull : false
            },
            name : {
                type : DataTypes.STRING(10),
                allowNull : false
            }
        },
        {
            tableName :"myuser",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = User;

// exports.post_signup = (data, cb) => {
//     let sql = `INSERT INTO myuser(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
//     cnn.query( sql, function(err){
//         if ( err ) throw err;
//         cb();
//     });
// }

// exports.post_signin = (id, pw, cb) => {
//     let sql = `SELECT * FROM myuser WHERE id='${id}' and pw='${pw}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }
// exports.get_user = (id, cb) => {
//     let sql = `SELECT * FROM myuser WHERE id='${id}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }

// exports.update_profile = (data, cb) => {
//     let sql = `UPDATE myuser SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//     cnn.query( sql, ( err ) => {
//         if ( err ) throw err;
//         cb();
//     })

// }
// exports.delete_user = (id, cb) => {
//     cnn.query(`DELETE FROM myuser WHERE id='${id}'`, (err) => {
//         if ( err ) throw err;
//         cb();
//     });
// }