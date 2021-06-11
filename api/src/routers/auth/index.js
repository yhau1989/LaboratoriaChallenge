const { Router } = require("express");
const { register, authLogin } = require("../../libs/login");
const router = Router();


//get list all post by user id
router.post("/auth/add/", async (req, res) => {

    const auth = req.body;
    if (auth) {
      let result = await register(auth.user, auth.pass);
      res.status(200).json(result);
    } else {
      res.status(400).json({ error: "i need auth json" });
    }
    
});

router.post("/auth/user/", async (req, res) => {

    const auth = req.body;
    if (auth) {
      let result = await authLogin(auth.user, auth.pass);
      res.status(200).json(result);
    } else {
      res.status(400).json({ error: "i need auth json" });
    }
    
});


module.exports = router;