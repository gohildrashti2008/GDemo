const user = require('../model/usermodel');
exports.register = async(req,res)=>{
    var data = await user.create(req.body);
    res.status(200).json({
        sucess:true,
        message:'data inserted successfully..!',
        data
    })
}