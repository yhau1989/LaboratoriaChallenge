import { PaperClipIcon } from "@heroicons/react/solid";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";

export default function ItemListPost(props) {
  const { post, removeItem } = props;
  const [activeEdit, setActiveEdit] = useState(false);

  return (
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      {activeEdit ? (
        <div className="mx-auto w-full">
          <NewPost
            cancelNewPost={() => {
              setActiveEdit(false)
            }}
            sendPost={() => {
              console.log("cancel");
            }}
            currentContent={post.content}
          ></NewPost>
        </div>
      ) : (
        <div className="w-0 flex-1 flex items-center">
          <PaperClipIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <div className="flex flex-col flex-1 w-0">
            <div className="flex flex-row space-x-2 my-2">
              <small className="text-sm ml-2 text-gray-500">
                Date: {post.createdAt}
              </small>
              <small className="text-sm ml-2 text-gray-500">
                Terget: {post.target}
              </small>
            </div>
            <div className="ml-2" style={{whiteSpace: "pre-wrap"}}>
            {post.content}
            </div>
          </div>
        </div>
      )}

      <div className="ml-4 flex flex-row flex-shrink-0 space-x-2">
        <div
          onClick={() => {
            setActiveEdit(true);
          }}
          className="font-medium text-pink-600 hover:text-pink-500 cursor-pointer"
        >
          Edit
        </div>
        <div
          className="font-medium text-pink-600 hover:text-pink-500 cursor-pointer"
          onClick={() => removeItem(post._id)}
        >
          Delete
        </div>
      </div>
    </li>
  );
}
