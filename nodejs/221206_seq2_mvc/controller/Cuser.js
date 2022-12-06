// const User = require("../model"); 
const { User } = require("../model"); //객체분해구조 할당

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async(req,res) => {
    let data = {id: req.body.id, pw: req.body.pw, name: req.body.name}
    await User.create(data);
    res.send(true);
    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}

exports.post_signin = async(req,res) => {
    let data = {id: req.body.id, pw: req.body.pw}
    let result = await User.findAll({where : data})
    if ( result.length > 0 ) res.send(true);
    else res.send(false);
    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
}

exports.profile = async(req,res) => {
    let data = {id: req.body.id}
    let result = await User.findAll({where : data})
    if ( result.length > 0 ) res.render("profile", {data: result[0]});
    else res.redirect("/user/signin");
    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = async (req,res) => {
    let data = {
        name: req.body.name,
        pw : req.body.pw
    }
    // let sql = `UPDATE myuser SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    await User.update(data, {where:{id: req.body.id}})
        res.send(true);
}

exports.profile_delete = async (req,res) => {
 //  cnn.query(`DELETE FROM myuser WHERE id='${id}'`

    await User.destroy({where: {id : req.body.id}}), 
        res.send(true);
}

