import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';
import { navLinks } from '../constants';
import { logo1, logo2 } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('Home 1');
	const [scrolled, setScrolled] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const { y } = useWindowScroll();

	useEffect(() => {
		if (y > 0) {
			setScrolled(true);
			navFontColor('black');
			navLogo(true);
		} else {
			setScrolled(false);
			navFontColor('white');
			navLogo(false);
		}
	}, [y]);

	if (window.innerWidth <= 990) {
		navFontColor('black')
		navLogo(true);
	}

	function navFontColor(color) {
		const navLinks = document.querySelectorAll('#navigation a');
		navLinks.forEach(link => {
			link.style.setProperty('color', color, 'important');
		});
	}

	function navLogo(status) {
		const element = document.getElementById("nav-logo");
		element.src = status === true ? logo2 : logo1;
	}


	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 990);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const navClasses = classNames(
		'fixed',
		'top-0',
		'w-full',
		'transition-all',
		'duration-300',
		'sm:bg-transparent',
		'sm:text-gray-900',
		{ 'bg-white': scrolled, '': !scrolled },
		{ 'text-gray-900': scrolled, '': !scrolled },
		{ '': !isSmallScreen, 'text-black': isSmallScreen },
	);

	function activeToogle(title) {
		const listItems = document.querySelectorAll('#navigation ul li');

		listItems.forEach((item) => {
			const spanElement = item.querySelector('span');
			if (spanElement) {
				spanElement.remove();
			}
		});

		const element = document.getElementById(title);
		const underscore = document.createElement('span');
		underscore.style.position = 'absolute';
		underscore.style.bottom = '0px'
		underscore.style.left = '0';
		underscore.style.width = '100%';
		underscore.style.height = '2px';
		underscore.style.backgroundColor = '#007FFF';
		element.appendChild(underscore);
	}

	const toggleMenu = () => {
		document.getElementById('isToggle').classList.toggle('open');
		const isOpen = document.getElementById('navigation');
		if (isOpen.style.display === "block") {
			isOpen.style.display = "none";
		} else {
			isOpen.style.display = "block";
		}
	}


	return (
		<>
			<nav id="topnav" className={navClasses}>
				<div className="container">
					<a className="logo pl-0" href="#">
					<img id="nav-logo" className=" dark:inline-block" alt="LOGO | PLS Scholarship Alumni Association Inc."
							style={{ height: '70px' }} />
					</a>

					<div className="menu-extras">
						<div className="menu-item">
							<a className="navbar-toggle" id="isToggle" onClick={toggleMenu} >
								<div className="lines">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</a>
						</div>
					</div>

					<div id="navigation">
						<ul className="navigation-menu nav-light">
							{navLinks.map((link) => (
								<li key={link.id} onClick={() => activeToogle(link.id)}>
									<Link
										id={link.id}
										key={link.id}
										to={link.link}
										className={`${active === link.title ? 'text-white' : 'text-gray-100'} hover:text-white text-[18px] font-medium cursor-pointer sub-menu-item`}
									>
										{link.title}
									</Link>
								</li>
							))}

							{/* <li className="has-submenu parent-menu-item">
								<a href="#">Nav 1.1</a><span className="menu-arrow"></span>
								<ul className="submenu">
									<li><a href="#" className="sub-menu-item">Nav 1.2</a></li>
									<li><a href="#" className="sub-menu-item">Nav 1.3</a></li>
								</ul>
							</li> */}
						</ul>
					</div>

				</div>
			</nav>

		</>
	)
}

export default Navbar