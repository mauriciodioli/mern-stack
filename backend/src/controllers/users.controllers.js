const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async(req, res) =>{ 
    const users = await User.find();
    res.json(users)
}

userCtrl.createUser = async(req, res) => {
    const {username, edad, direccion, fechaNac} = req.body;    
    const newUser = new User({
        username,
        edad,
        direccion,
        fechaNac
    }) ;
    await newUser.save();
    res.json({message: 'User saved'})
}

userCtrl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}

userCtrl.updateUser = async(req, res) => {
    const {username, edad, direccion, fechaNac} = req.body; 
    await User.findByIdAndUpdate({_id: req.params.id},{
        username, 
        edad, 
        direccion, 
        fechaNac
});
    res.json({message: 'User updated'})
}

userCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted'})
}

module.exports = userCtrl;