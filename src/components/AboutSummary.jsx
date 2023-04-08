import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { aboutPLS } from '../constants';

const AboutSummary = () => {
	useEffect(() => {
		feather.replace();
	}, []);

	return (
		<section className="relative md:py-24 py-16 bg-gray-50">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] rounded-lg">
					{aboutPLS.map((as) => (
						<Link
							id={as.id}
							key={as.id}
							to={as.link + as.id}
							target="_blank"
						>
							<div key={as.id} className="blog relative rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden bg-white transition-all duration-500 hover:scale-105 ease-in-out">
								<img src={as.imgSrc} alt={as.imgAlt} />
								<div className="content p-6">
									<p className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
										{as.title}
									</p>
									<p className="text-slate-400 mt-3 text-justify">
										{as.highlights}
									</p>
									<div className="mt-4">
										<p className="btn btn-link flex items-center text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
											<span className="mr-2">Read More</span>
											<i data-feather="arrow-right" className="h-5 w-5 text-purple-600 align-inline" />
										</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutSummary