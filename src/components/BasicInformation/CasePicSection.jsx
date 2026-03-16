import React from "react";

const CasePicSection = ({ formik }) => {
	return (
		<div className="flex gap-5 w-full mt-5 lg:flex-nowrap flex-wrap items-center justify-start">
			<div className="flex flex-col gap-1 w-1/3">
				<label htmlFor="caseID" className="text-[#364153]">
					Case ID <span className="text-red-600">*</span>
				</label>
				<input
					name="caseID"
					onChange={formik.handleChange}
					value={formik.values.caseID}
					placeholder="Auto Generated"
					type="text"
					className="border px-2 py-1 rounded-sm border-[#576172] focus:outline-none focus:border-indigo-500"
				/>
			</div>

			<div className="flex flex-col gap-1 w-1/3">
				<label htmlFor="picName" className="text-[#364153]">
					PIC Name <span className="text-red-600">*</span>
				</label>
				<input
					name="picName"
					onChange={formik.handleChange}
					value={formik.values.picName}
					placeholder="Person in charge"
					type="text"
					className="border px-2 py-1 rounded-sm border-[#576172] focus:outline-none focus:border-indigo-500"
				/>
			</div>

			<div className="flex flex-col gap-1 w-1/3">
				<label htmlFor="picAge" className="text-[#364153]">
					PIC Age <span className="text-red-600">*</span>
				</label>
				<input
					name="picAge"
					onChange={formik.handleChange}
					value={formik.values.picAge}
					placeholder="Age"
					type="number"
					className="border px-2 py-1 rounded-sm border-[#576172] focus:outline-none focus:border-indigo-500"
				/>
			</div>
		</div>
	);
};

export default CasePicSection;
