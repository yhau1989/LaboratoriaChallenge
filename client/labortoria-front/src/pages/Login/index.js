import { LockClosedIcon } from '@heroicons/react/solid'
import {Link, useHistory} from "react-router-dom"
import { useState } from "react";
import { loginUser } from "../../services/api";

export default function Login() {

  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [styleMsg, setStyleMsg] = useState("");
  const [loading, setLoading] = useState("");


  const HandleSubmit = async (event) => {
    setLoading('loading')
    event.preventDefault();
    loginUser({ user, pass: password })
      .then((rest) => {evalueRequest(rest)})
      .catch((_error) => evalueRequest(_error));
  };

  const evalueRequest = (request) => {
    let { error, msg } = request;
    setLoading("")
    if (error) {
      setMsg(error.errorMessage);
      setStyleMsg("text-red-500");
    }
    if (msg) {
      // setMsg(msg);
      // setStyleMsg("text-green-500");
      // setUser("")
      // setPassword("")
      history.push('/dashboard')
    }
    
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/">
          <img
            className="mx-auto w-60"
            src="https://v.fastcdn.co/u/cf943cfe/27418802-0-Laboratoria-Logo-RGB.png"
            alt="Workflow"
          />
          </Link>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-pink-600 hover:text-pink-500">register</Link>
            
          </p>
        </div>
        <form onSubmit={HandleSubmit} className="mt-8 space-y-6" action="#" method="POST">
          
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-100 flex justify-end">
            
            <div className="text-sm">
              <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
          </div>

          {msg && <div className={`w-100 text-sm ${styleMsg}`}>{msg}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              disabled={(loading) ? true : false}           
            >
              {(loading) ? (
                <svg
                class="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              )
               : (<span className="absolute left-0 inset-y-0 flex items-center pl-3">
               <LockClosedIcon
                 className="h-5 w-5 text-pink-500 group-hover:text-pink-400"
                 aria-hidden="true"
               />
               
             </span> )
               }
               {(loading) ? 'Processing' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
    
  )
}