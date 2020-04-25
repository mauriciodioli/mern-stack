const {Router} = require('express');
const router = Router();

const {getUsers, createUser, updateUser, deleteUser, getUser} = require('../controllers/users.controllers')

router.route('/')
    .get(getUsers)
    .post(createUser)

    //http://localhost:4000/api/users/1
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
    

module.exports = router;