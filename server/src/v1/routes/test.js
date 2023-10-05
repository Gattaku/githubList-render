const router = require("express").Router();
const controller = require("../controllers/dataControllers");

router.get("/",(req,res)=>{
    res.send("Hello nodejs")
})

module.exports = router;