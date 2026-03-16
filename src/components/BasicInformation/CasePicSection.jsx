import React from "react";

const CasePicSection = ({ formik }) => {
	return (
		<div className="flex gap-5 w-full mt-5 lg:flex-nowrap flex-wrap">
			<div className="flex flex-col gap-1 w-1/3">
				<label>Case ID *</label>
				<input
					name="caseID"
					onChange={formik.handleChange}
					value={formik.values.caseID}
					className="border px-2 py-1 rounded-sm border-[#576172]"
				/>
			</div>

			<div className="flex flex-col gap-1 w-1/3">
				<label>PIC Name *</label>
				<input
					name="picName"
					onChange={formik.handleChange}
					value={formik.values.picName}
					className="border px-2 py-1 rounded-sm border-[#576172]"
				/>
			</div>

			<div className="flex flex-col gap-1 w-1/3">
				<label>PIC Age *</label>
				<input
					name="picAge"
					type="number"
					onChange={formik.handleChange}
					value={formik.values.picAge}
					className="border px-2 py-1 rounded-sm border-[#576172]"
				/>
			</div>
		</div>
	);
};

export default CasePicSection;
