
let controllers = {

    test : function(req,res){
        res.send("阿斯蒂芬");
    },
    //保存记录
    saveData : function(req,res){

    },
    //获取记录
    getData: function(req,res){
        res.send({
            name: 123,
            age : 234
        });
    }








}


module.exports = {
    root: 'wechat',
    controllers: controllers
}