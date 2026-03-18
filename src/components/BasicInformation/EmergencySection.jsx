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
					className="resize-none mt-1 block w-full rounded-md border border-[#576172] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
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
					className="resize-none mt-1 block w-full rounded-md border border-[#576172] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
				/>
			</div>
		</div>
	);
};

export default EmergencySection;
