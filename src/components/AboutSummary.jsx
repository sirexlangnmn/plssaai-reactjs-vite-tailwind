import React from 'react';
import { useEffect } from 'react';
import { aboutSummary } from '../constants';

const AboutSummary = () => {
	useEffect(() => {
		feather.replace();
	}, []);

	return (
		<section className="relative md:py-24 py-16 bg-gray-50">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] rounded-lg">
					{aboutSummary.map((as) => (
						<div key={as.id} className="blog relative rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden bg-white ">
							<img src={as.imgSrc} alt={as.imgAlt} />
							<div className="content p-6">
								<a href="#" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
									{as.title}
								</a>
								<p className="text-slate-400 mt-3 text-justify">
									{as.description}
								</p>
								<div className="mt-4">
									<a href={as.link} className="btn btn-link flex items-center text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
										<span className="mr-2">Read More</span>
										<i data-feather="arrow-right" className="h-5 w-5 text-purple-600 align-inline" />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutSummary