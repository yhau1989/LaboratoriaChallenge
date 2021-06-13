/* This example requires Tailwind CSS v2.0+ */
import UserHead from "./userHead";
import NewPost from "./NewPost";
import ListPosts from "./ListPosts";
import { useState, useEffect } from "react";
import {
  addPost,
  listPosts,
  listPostsByTarger,
  deletePost,
  editPost,
} from "../services/api";
import {useHistory} from "react-router-dom"

export default function DashboardComponent(props) {

  const history = useHistory();
  const [viewPanelPost, setViewPanelPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [loadinsListPost, setLoadinsListPost] = useState("🕐 loading.....");
  const [mensaje, setMensaje] = useState("");

  const {emailUser} = props

  useEffect(() => {
    if(emailUser && emailUser.length > 0)
    {
      getListPost();
    }
  }, [emailUser]);

  useEffect(() => {
    window.clearTimeout()
    setTimeout(() => {
      if (mensaje.length > 0) {
        setMensaje("");
      }
      return () => {

      };
    }, 5000);
  }, [mensaje]);

  const getListPost = (viewLoagind = null) => {
    
    try {
      if (viewLoagind === 1) {
        setLoadinsListPost("🕐 loading.....");
      }
  
      listPosts(emailUser)
        .then((rsl) => {
          setLoadinsListPost("");
          if (rsl.length <= 0) {
            if (!(JSON.stringify(rsl) === JSON.stringify(posts))) {
              setPosts([]);
            }
            setMensaje("You haven't any post ");
          } else {
            //console.log("rsl.length", rsl);
            if (!(JSON.stringify(rsl) === JSON.stringify(posts))) {
              setPosts(rsl);
            }
          }
        })
        .catch((error) => {
          setMensaje("Sorry we have a problems");
          console.error('e33',error)
        });
    } catch (error) {
      setMensaje("Sorry we have a problems");
      console.error('e22',error)
    }
    
    
  };

  const sendNewPost = async (_post) => {
    let post = {
      idUser: emailUser,
      content: _post.post,
      target: _post.target,
      status: 1,
      createdAt: new Date(),
    };

    const apiAdd = await addPost(post);

    if (apiAdd.msg) {
      setViewPanelPost("");
      setMensaje("Saved Success");
      getListPost();
    }
  };

  const getListByTarget = (target) => {
    setLoadinsListPost("🕐 loading.....");
    listPostsByTarger(emailUser, target)
      .then((rsl) => {
        setLoadinsListPost("");
        if (rsl.length > 0) {
          setMensaje("");
          setPosts(rsl);
        } else {
          setMensaje(`You haven't post ${target}`);
          setPosts([]);
        }
      })
      .catch((error) => console.error(error));
  };

  const deleteItemPost = (idPost) => {
    deletePost(idPost)
      .then((rsl) => {
        let { msg } = rsl;
        if (msg) {
          setMensaje("Changes Success 🤗");
          getListPost();
        }
      })
      .catch((error) => console.error(error));
  };


  const editPostById = async (_post) => {
    // console.log('editPostById', _post)
    let post = {
      content: _post.post,
      target: _post.target,
      status: 1,
    };

    const apiEdit = await editPost(_post.id, post);

    if (apiEdit.msg) {
      setViewPanelPost("");
      setMensaje("Saved Success");
      getListPost();
    }
  };




  const signOutHandler = () => {
    localStorage.removeItem('userLogin');
    document.cookie = 'laboratoriaValidtimeL=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    history.push('/login')
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                alt=""
                className="w-40"
                src="https://v.fastcdn.co/u/cf943cfe/27418802-0-Laboratoria-Logo-RGB.png"
              />
            </a>
          </div>

          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a> */}
            <button
              onClick={signOutHandler}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  text-white bg-pink-600 hover:bg-pink-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <img
          className="z-10 h-80 w-full object-cover lg:w-full"
          src="https://images.unsplash.com/photo-1615366424234-077318da5f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <div className="absolute bottom-0 left-0 ml-10 mb-4">
          <img
            src="https://images.unsplash.com/photo-1620075225255-8c2051b6c015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80"
            alt=""
            className="w-32 h-32 object-cover rounded-full mr-2 bg-gray-100 border-4"
          />
        </div>
      </div>
      <UserHead
        userN={emailUser}
        newPost={setViewPanelPost}
        wiewFriends={getListByTarget}
        wiewPublics={getListByTarget}
      ></UserHead>
      {viewPanelPost && (
        <div className="pb-4 max-w-7xl mx-auto ">
          <NewPost
            cancelNewPost={setViewPanelPost}
            sendPost={sendNewPost}
            ></NewPost>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-center mt-2 transition-shadow duration-300 ease-in-out">
        {mensaje}
      </div>

      {loadinsListPost && (
        <div className="w-full text-center relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-row space-x-2 justify-center">
          Loading posts .....
          <svg
            className="animate-spin h-5 w-5 mr-3 text-pink-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-0"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      <ListPosts
        loading={loadinsListPost}
        list={posts}
        refreshList={getListPost}
        _delete={deleteItemPost}
        _editPosts={editPostById}
      />
    </>
  );
}
