const { Router } = require("express");
const { newOrganization } = require("../../libs/organizations");
const router = Router();

router.get("/", (req, res) => res.send("Hello Laboratoria"));

// router.get('/posts/*', function(req, res) {
//   res.status(400).json({error: "Page Not Found"})
// });


//get list all post by user id
router.post("/webhooks/organizations/", async(req, res, next) => {

  
    const { organization } = req.body;
    if (organization) {
      let list = await newOrganization(organization);
      
       res.status(200).json(list);
      // res.json(list,200)
    } else {
      res.status(400).json({ error: "i need idUser " });
    }
});

//get list all post by user id and target
router.post("/posts/t/:target", async(req, res) => {
  const {target } = req.params;
  const { idUser } = req.body;
    if (idUser && target) {
      let list = await getListbyTarget(idUser, target);
      res.status(200).json(list);
    } else {
      res.status(400).json({ error: "i need idUser and  target" });
    }
});

//new post
router.post("/posts/new/", async(req, res) => {
 
  const result = await newPost(req.body);
  res.status(200).json(result);
});

//edit any post
router.post("/posts/edit/:postId", async(req, res) => {
  const {postId} = req.params
  const result = await editPost(postId,req.body);
  res.status(200).json(result);
});

//delete any post
router.delete("/posts/d/:postId", async(req, res) => {
  const {postId} = req.params
  const result = await deletePost(postId);
  res.status(200).json(result);
});

module.exports = router;
