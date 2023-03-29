import React from "react";

// tạo component Footer
const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white fixed bottom-0 w-full pb-4">
			<div className="container mx-auto text-center">
				<p>
					Copyright © {new Date().getFullYear()}
					<a
						href="#"
						className="text-blue-400 hover:text-blue-500"
					>
						Your Website
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
