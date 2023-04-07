import React from 'react'

const BackToTop = () => {
	window.onscroll = function () {
    scrollFunction();
};

	function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("block");
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
            mybutton.classList.remove("block");
        }
    }
}

function topFunction() {
	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
	window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


	return (
		<a href="#" onClick={topFunction} id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"><i className="uil uil-arrow-up" /></a>
	)
}

export default BackToTop