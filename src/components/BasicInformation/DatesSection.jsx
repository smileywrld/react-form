import React from "react";

const DatesSection = ({ formik }) => {
	return (
		<div className="flex w-full mt-5 justify-between gap-4">
			<div className="w-1/2">
				<label className="block text-sm font-medium text-gray-700">
					Birthday <span className="text-red-600">*</span>
				</label>
				<input
					name="birthday"
					type="date"
					onChange={formik.handleChange}
					value={formik.values.birthday}
					className="mt-1 block w-full rounded-md border border-[#DADEE3] px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>

			<div className="w-1/2">
				<label className="block text-sm font-medium text-gray-700">
					1st Consultation Date <span className="text-red-600">*</span>
				</label>
				<input
					name="consultationDate"
					type="date"
					onChange={formik.handleChange}
					value={formik.values.consultationDate}
					className="mt-1 block w-full rounded-md border border-[#DADEE3] px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	);
};

export default DatesSection;
