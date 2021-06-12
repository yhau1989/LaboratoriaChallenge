import { PaperClipIcon } from "@heroicons/react/solid";

export default function ItemListPost(props) {
  const { post } = props;

  return (
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <PaperClipIcon
          className="flex-shrink-0 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <div className="flex flex-col flex-1 w-0">
          <small className="text-sm font-medium ml-2 text-gray-500">
            Date: {post.createdAt}
          </small>
          <span className="ml-2">{post.content}</span>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0 space-x-2">
        <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
          Edit
        </a>
        <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
          Delete
        </a>
      </div>
    </li>
  );
}
