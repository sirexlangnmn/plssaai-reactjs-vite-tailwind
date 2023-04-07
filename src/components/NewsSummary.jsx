import React from 'react';
import { useEffect } from 'react';
import { news } from '../constants';
import { ArticleSummary } from './index';
const NewsSummary = () => {
  useEffect(() => {
		feather.replace();
	}, []);

  return (
    <div className="container mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 pb-4 items-end">
        <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
          <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">News</h3>
        </div>
        <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
        </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-8 md:col-span-6">
          <div className="grid grid-cols-1 gap-[30px]">
            {news.map((data) => (
              <div key={data.id} className="blog relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                <div className="lg:flex relative">
                  <div className="relative md:shrink-0">
                    <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={data.imgSrc} alt={data.imgSrc} />
                  </div>
                  <div className="p-6 flex flex-col lg:h-56 justify-center">
                    <a href="#" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
                      {data.title}
                    </a>
                    <div className="my-auto">
                      <p className="text-slate-400 mt-3">
                        {data.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a href={data.newsLink} className="btn btn-link flex items-center text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                      <span className="mr-2">Read More</span>
                      <i data-feather="arrow-right" className="h-5 w-5 text-purple-600 align-inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ArticleSummary />
      </div>
    </div>
  )
}

export default NewsSummary