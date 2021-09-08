const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://devusr:LNQgd84rUiXP8Gzc@cluster0.tcegv.mongodb.net/laboratoriaPeru?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology:true }
);

const { Schema } = mongoose;
const postsSchema = new Schema({
  objectID: String,
  idUser: String,   
  content: String,
  target: String,
  createdAt: String,
  status: Number,
});


const Post = mongoose.model("Posts", postsSchema);

function testConnections(){
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log("open connection..!");
    });
  };

   const getList = async(id) => {
    let result = await Post.find({idUser: id, status: 1}, (err, post) => {
      return  (err) ? {status: 99, error:err} : post;
    }).sort({createdAt: 'desc'});
    return result;
  };

  const getListbyTarget = async(id, target) => {
    let result = await Post.find({idUser: id, status: 1, target}, (err, post) => {
      return (err) ? {status: 99, error:err} : post;
    }).sort({createdAt: 'desc'});
    return result;
  };
  
  
  async function findByObjectID(id){
    let result = await Post.findOne({ _id: id}, (err, feed) => {
      return (err) ? err : feed;
    });
    return result;
  };


  const newPost = async(newPost) => {
      let result = 0;
    try {
      let post = new Post(newPost);
      let stat = await post.save();
      result = {msg: 'ok', idpost: stat._id}
    } catch (error) {
      result = {status: 99, error};
    }
    return result;
  };
  
  
  const editPost = async(id, post) => {
    const {content, target} = post;
    let result = 0;
    try {
      let stat = await Post.updateOne({ _id: id }, { content, target });
      result = {msg: 'ok', idpost: stat}
    } catch (error) {
      result = {status: 99, error};
    }
    return result;
  
  }


  const deletePost = async(id) => {
    let result = 0;
    try {
      let stat = await Post.deleteOne({ _id: id });
      result = {msg: 'ok', idpost: stat}
    } catch (error) {
      result = {status: 99, error};
    }
    return result;
  
  }
  
  
  module.exports = { newPost, findByObjectID, testConnections, getList, editPost, getListbyTarget, deletePost};
  

// let post = {
//     idUser: 11,
//     postBody: {
//         content : ""
//     },
//     target: ['public', 'friends'],
//     status : 1,
//     dateCreated
// } 