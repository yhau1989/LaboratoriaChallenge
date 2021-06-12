import {Link} from "react-router-dom"

export default function PageNotfound(params){
    
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        
          <img
            className="mx-auto w-60"
            src="https://v.fastcdn.co/u/cf943cfe/27418802-0-Laboratoria-Logo-RGB.png"
            alt="Workflow"
          />
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Page not found</h2>
          <p className="text-center">
          <Link to="/" className="font-medium text-pink-600 hover:text-pink-500">Go to home</Link>
          </p>
        </div>
        
      </div>
    </div>
    )
}
