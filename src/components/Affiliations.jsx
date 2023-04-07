import React from 'react'
import { sponsors } from '../constants';

const Affiliations = () => {

	return (
		<section className="relative md:py-24 py-16 bg-gray-50 mt-10">
			<div className="container">
				<div className="grid md:grid-cols-12 grid-cols-1 pb-4 items-end">
					<div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
						<h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Sponsors</h3>
					</div>
					<div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{sponsors.map((data) => (
						<div key={data.id}>
							<img className="h-auto max-w-full rounded-lg shadow-md" src={data.imgSrc} alt={data.imgAlt} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Affiliations