import React from 'react'

const Team = () => {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0">
    <div className="container">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Team</h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
      </div>{/*end grid*/}
      <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/01.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/02.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/03.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/04.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
      </div>{/*end grid*/}
      <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/01.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/02.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/03.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/04.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
      </div>{/*end grid*/}
      <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/01.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/02.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/03.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/04.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>{/*end icon*/}
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/01.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/02.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/03.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6">
          <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
            <img src="../../assets/images/client/04.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
            <div className="content mt-4">
              <a href className="text-lg font-medium hover:text-indigo-600 block">Fullname</a>
              <span className="text-slate-400 block">Position</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <ul className="list-none mt-4">
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Team