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

			<div className="flex gap-3 mt-4">
				<button className="btn border p-1 rounded-md bg-[#E0E7FF] border-[#A3B3FF] text-[#432DD7]">
					Basic Information
				</button>
				<button className="btn p-1 rounded-md bg-[#F3F4F6] text-[#4A5565]">
					Case Type Selection
				</button>
			</div>
		</div>
	);
};

export default Header;
