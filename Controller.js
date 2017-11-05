let qs = require("querystring")
let mysql = require("mysql")
var pool = mysql.createPool({
    host: "120.24.235.91",
    user: "root",
    password: "Nuoyadb_1",
    database: "timetotime",
    port: 3306,
    connectionLimit: 10
});

let controllers = {

    test: function (req, res) {
        res.send("阿斯蒂芬");
    },
    //保存记录
    saveData: function (req, res) {
        console.log(req.body);
        res.send('保存成功');
    },
    //获取记录
    getData: function (req, res) {
        res.send({name: 123, age: 234});
    },
    login(req, res) {
        console.log(req.query);
        res.send(req.query)
        var uname = req.query.uname;
        var upwd = req.query.upwd;

        var sql = "select * from timetimeuser where uname=? and upwd=?";

        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err + " GetConnect")
            } else {
                console.log("sueecss");
                conn.query(sql, [
                    uname, upwd
                ], (err, result) => {
                    if (err) {
                        console.log(err + " query")
                    } else {
                        console.log(result)
                    }
                    conn.release()
                })
            }
        })
    }, //login end
    signin(req, res) {
        console.log(req.query);
        res.send(req.query)

        var uname = req.query.uname;
        var upwd = req.query.upwd;
        var sql = "insert into timeuser values(null,?,?)";

        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err + " GetConnect")
            } else {
                console.log("sueecss");
                conn.query(sql, [
                    uname, upwd
                ], (err, result) => {
                    if (err) {
                        console.log(err + " query")
                        // res.send(err);     这里有错
                    } else {
                        console.log(result)
                    }
                    conn.release()
                })
            }
        })
    }// signin end
} //controllers end

module.exports = {
    root: 'wechat',
    controllers: controllers
}