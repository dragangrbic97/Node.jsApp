const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const {validationResult, check} = require ('express-validator')
const {addUserHandler} = require("../handlers/add-user")
const {deleteUserHandler} = require("../handlers/delete-user")
const {showUserHandler, showUsersHandler} = require("../handlers/show-user")
const {updateUser} = require("../db/user/user");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post("/add",check('id',"id field should contain 13 characters").isString().isLength({ min: 13,max: 13 }),
    async (req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const response = await addUserHandler(req.body);
    res.send(response);
});

router.get("/all",async (req,res)=>{
    const data = await showUsersHandler();
    res.send(data);
})

router.post("/delete", async (req,res)=>{
    await deleteUserHandler(req.body.id);
    res.send("User with ID:"+req.body.id+" has been deleted");
})

router.post("/update",check('id',"id field should contain 13 characters").isString().isLength({ min: 13,max: 13 }),
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const data= await updateUser(req.body)
    res.send("User with ID="+req.body.id+" has been updated");
})

router.get("/id",check('id',"id field should contain 13 characters").isString().isLength({ min: 13,max: 13 }),
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const data=await showUserHandler(req.query.id);
    res.send(data);
})

module.exports = router