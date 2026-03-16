import React from "react";

const Footer = () => {
	return (
		<div>
			<div className="flex justify-between pt-6">
				<button
					type="button"
					className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</button>
					<button
						type="button"
						className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
					>
						Save Draft
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Next
					</button>
			</div>
		</div>
	);
};

export default Footer;
