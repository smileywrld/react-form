import React from "react";

const EmergencySection = ({ formik }) => {
	return (
		<div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Emergency Contact 1 <span className="text-red-600">*</span>
				</label>
				<textarea
					name="emergContact"
					rows={4}
					onChange={formik.handleChange}
					value={formik.values.emergContact}
					placeholder="Name, relationship, phone number, address"
					className="mt-1 block w-full resize-none rounded-md border border-[#DADEE3] p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Emergency Contact 2
				</label>
				<textarea
					name="emergContact2"
					rows={4}
					onChange={formik.handleChange}
					value={formik.values.emergContact2}
					placeholder="Name, relationship, phone number, address"
					className="mt-1 block w-full resize-none rounded-md border border-[#DADEE3] p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	);
};

export default EmergencySection;
