import React from 'react'

const HeroTwo = (props) => {
  const data = props.aboutUs;
  const { txt_1, txt_2, imgBg } = data[0];
  return (
    // <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.jpg')] bg-no-repeat bg-center">
    <section className={`relative table w-full py-36 lg:py-44 bg-[url('${imgBg}')] bg-no-repeat bg-center`}>
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">{txt_1}</h3>
          <p className="text-slate-300 text-lg max-w-xl mx-auto text-justify">
            {txt_2}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroTwo