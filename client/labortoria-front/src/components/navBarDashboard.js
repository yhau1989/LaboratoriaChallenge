/* This example requires Tailwind CSS v2.0+ */
import UserHead from './userHead'
import NewPost from './NewPost'
import ListPosts from './ListPosts'

export default function NavBarDashboard() {
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
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                >
                  Sign up
                </a>
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
                    <img src="https://images.unsplash.com/photo-1620075225255-8c2051b6c015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80" alt="" class="w-32 h-32 object-cover rounded-full mr-2 bg-gray-100 border-4" />
                </div>
          </div>
          <UserHead></UserHead>
          <NewPost></NewPost>
          <ListPosts></ListPosts>
        </>

  )
}
