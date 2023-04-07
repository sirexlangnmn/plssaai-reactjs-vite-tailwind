import React from 'react'
import { teamText, team } from '../constants';

const Team = (props) => {
  const { txt_1, txt_2 } = props.teamText[0];
  const team = props.team;
  console.log('Team team: ', team);
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{txt_1}</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            {txt_2}
          </p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
          {team.map((data) => (
            <div key={data.id} className="lg:col-span-3 md:col-span-6 shadow-md">
              <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900 shadow-md">
                <img src={data.imgSrc} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                <div className="content mt-4">
                  <a href="#" className="text-lg font-medium hover:text-indigo-600 block">{data.fullname}</a>
                  <span className="text-slate-400 block">Position</span>
                  <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <ul className="list-none mt-4">
                    <li className="inline"><a href={data.fbLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href={data.instagramLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href={data.twitterLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href={data.linkedinLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team