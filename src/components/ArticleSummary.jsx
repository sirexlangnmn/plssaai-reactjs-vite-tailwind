import React from 'react'
import { otherArticles } from '../constants';

const ArticleSummary = () => {
  return (
    <div className="lg:col-span-4 md:col-span-6">
      <div className="sticky top-20">
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Other Articles</h5>
        {otherArticles.map((data) => (
          <div key={data.id} className="flex items-center mt-8">
            <img src={data.imgSrc} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
            <div className="ml-3">
              <a href={data.newsLink} className="font-semibold hover:text-indigo-600">{data.title}</a>
              <p className="text-sm text-slate-400">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleSummary