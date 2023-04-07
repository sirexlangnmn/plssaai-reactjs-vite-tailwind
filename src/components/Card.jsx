import React from 'react'

const Card = (props) => {
  const card_data = props.cardData;

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          {card_data.map((data) => (
            <div key={data.id} className="blog relative rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden">
              <img src={data.imgSrc} alt={data.imgAlt} />
              <div className="content p-6">
                <a href="../blog_details/banque_raiffeisen_donation_2018.html" target="_blank" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{data.title}</a>
                <p className="text-slate-400 mt-3">
                  {data.short_description}
                </p>
                <div className="mt-4">
                  <a href="../blog_details/banque_raiffeisen_donation_2018.html" target="_blank" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Card