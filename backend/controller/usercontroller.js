const express = require("express");
const router = express.Router();
const userModel = require(".././schema")
const { body, validationResult } = require("express-validator");




router.post("/",
    body("email")
    .isEmail()
    .custom(async (value) => {
        const user = await userModel.findOne({ email: value });
        if (user) {
            throw new Error("Email is already taken");
        }
        return true;
    }),
    body('password')
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .custom(async (value) => {
        const password = value;
        
         if (password.length < 5) {
            throw new Error("password lenght must be 5");
        }
        return true;
    }),
    async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const userdeatils = await userModel.create(req.body)

        res.status(200).json(userdeatils)

    }
    catch (err) {
        res.status(500).send({ "err": err.message })
    }
})

router.get("/", async (req, res) => {
    try {
        const userdeatils = await userModel.find()


        res.status(200).json(userdeatils)

    }
    catch (err) {
        res.status(500).send({ "err": err.message })
    }
})

module.exports = router;