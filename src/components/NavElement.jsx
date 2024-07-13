import React from 'react';

const NavElement = ({ content, href, icon, main, active }) => {
	return (
		<a
			className={`relative flex flex-row items-center transition-transform transform hover:scale-105 hover:shadow-lg text-white
			} ${active ? 'text-purple-600 font-bold' : ''}`} // Dodano obsługę klasy `active`
			href={href}>
			<div className='flex items-center justify-center text-white hover:text-gray-200'>{icon}</div>
			<span className={`ml-2 pb-5 text-2xl md:text-3xl lg:text-4xl`}>{content}</span>
			<div className='absolute inset-x-[-20%] inset-y-[-10%] bg-[#ae1dcf] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 rounded-lg'></div>
		</a>
	);
};

export default NavElement;
