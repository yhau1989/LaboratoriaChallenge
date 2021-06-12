import { Fragment } from 'react'
import { BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon, } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NewPost(params) {
    
    return (
      <div className="pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:justify-between">

      
        <form className="mt-8 h-auto space-y-6 w-full" action="#" method="POST">
          
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Write post
              </label>
              <textarea
                id="email-address"
                name="email"
                type="text"
                required
                className="appearance-none rounded-md relative block h-40 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Write post"
              />
            </div>
            
          </div>

          

          <div className="w-auto flex space-x-2">

          <button
              type="submit"
              className="relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-pink-600 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              
              Publish post
            </button>

          <Menu as="span" className="ml-3 relative">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Terget
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-left absolute left-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Publish
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Only Friends
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>

        <div
              className="cursor-pointer relative flex justify-center py-2 px-4 border border-transparent bg-opacity-80 text-sm font-medium rounded-md text-pink-600 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              
              Cancel
            </div>
            

          </div>
        </form>
        </div>
    )
};
