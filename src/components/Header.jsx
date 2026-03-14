import React from "react";
const Header = () => {
	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<p className="text-gray-500">Section 1 of 2</p>
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-800">
					Basic Information
				</h2>

				<p className="text-gray-500">50% Complete</p>
			</div>
		</div>
	);
};

export default Header;
