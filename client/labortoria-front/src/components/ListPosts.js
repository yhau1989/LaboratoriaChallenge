/* This example requires Tailwind CSS v2.0+ */
import ItemListPost  from "./ItemListPost";
import { useEffect, useState } from "react";
import { RefreshIcon } from '@heroicons/react/solid'

export default function ListPosts(props) {
  const { list, refreshList, _delete, loading, _editPosts} = props;


  const refrehs = () => {
    refreshList(1)
  }
  

  return (
    <div className={`${(loading) ? 'hidden': ''} max-w-7xl mx-auto px-4 sm:px-6`}>
      <div className="py-5 flex items-center  space-x-2">
        <h2 className="text-lg leading-6 font-medium text-gray-900 ">
          Your Posts
        </h2>
        <RefreshIcon onClick={() => refrehs()} className="h-5 w-5 hover:text-pink-500 cursor-pointer" aria-hidden="true" />
      </div>

      <div className="py-5">
      {
        (list?.length > 0) ? (<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {Array.from(list).map((item) => {
            return <ItemListPost key={item._id} post={item} removeItem={_delete} editPost={_editPosts}></ItemListPost>
          })}
          
        </ul>
      </dd>): null
      }
        
      </div>
    </div>
  );
}
