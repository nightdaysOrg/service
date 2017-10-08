let controllers = {

    test: function (req, res) {
        res.send("阿斯蒂芬");
    },
    //保存记录
    saveData: function (req, res) {
        console.log(req.body);
    },
    //获取记录
    getData: function (req, res) {
        res.send({
            name: 123,
            age: 234
        });
    },
    login(req, res) {
        req.on("data", (data) => {
            var str = data.toString();
            var obj = qs.parse(str);
            var uname = obj.uname;
            var upwd = obj.upwd;

            var sql = "select * from timetimeuser where uname=password(?) and upwd=?";

            pool.getConnection((err, conn) => {
                if (err) {
                    console.log(err + " GetConnect")
                } else {
                    console.log("sueecss");
                    conn.query(sql, [uname, upwd], (err, result) => {
                        if (err) {
                            console.log(err + " query")
                        } else {
                            console.log(result)
                        }
                        conn.release()
                    })
                }
            })
        })
    }








}


module.exports = {
    root: 'wechat',
    controllers: controllers
}