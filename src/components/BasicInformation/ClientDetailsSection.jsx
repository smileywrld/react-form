import React from "react";

const ClientDetailsSection = ({ formik }) => {
	return (
		<div className="flex flex-col gap-1 mt-5">
			<label>Client Full Name *</label>

			<input
				name="fullName"
				onChange={formik.handleChange}
				value={formik.values.fullName}
				className="w-full border px-2 py-1 rounded-sm border-[#576172]"
			/>
		</div>
	);
};

export default ClientDetailsSection;
