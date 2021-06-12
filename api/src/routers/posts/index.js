const { Router } = require("express");
const { newPost, getList, editPost, getListbyTarget, deletePost} = require("../../libs/posts");
const router = Router();

router.get("/", (req, res) => res.send("Hello Laboratoria"));

//get list all post by user id
router.post("/posts/list/", async(req, res, next) => {

  console.log('/posts/list/ fue llamado')
    const { idUser } = req.body;
    if (idUser) {
      let list = await getList(idUser);
      console.log('posts/list',list)
       res.status(200).json(list);
      // res.json(list,200)
    } else {
      res.status(400).json({ error: "i need idUser " });
    }
});

//get list all post by user id and target
router.post("/posts/u/:userId/t/:target", async(req, res) => {
  const { userId, target } = req.params;
    if (userId && target) {
      let list = await getListbyTarget(userId, target);
      res.status(200).send(list);
    } else {
      res.status(400).json({ error: "i need userid " });
    }
});

//new post
router.post("/posts/new/", async(req, res) => {
  //console.log(req.body);
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
