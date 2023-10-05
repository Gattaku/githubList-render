const router = require("express").Router();
// const fetch = require("../controllers/fetch");
const controller = require("../controllers/dataControllers");

// router.get("/:userName", async (req, res) => {
//     const { userName } = req.params;
//     const userInfo = await fetch.getUser(userName);
//     res.status(200).send(userInfo);
// })
router.get("/:userName", controller.getUserInfo, controller.modifyData, controller.resData); //ミドルウェアの練習のために少し回りくどくした

module.exports = router;