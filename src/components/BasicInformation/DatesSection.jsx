import React from "react";

const DatesSection = ({ formik }) => {
	return (
		<div className="flex w-full mt-5 gap-4">

			<div className="w-1/2">
				<label>Birthday *</label>
				<input
					name="birthday"
					type="date"
					onChange={formik.handleChange}
					value={formik.values.birthday}
					className="border w-full p-2"
				/>
			</div>

			<div className="w-1/2">
				<label>1st Consultation Date *</label>
				<input
					name="consultationDate"
					type="date"
					onChange={formik.handleChange}
					value={formik.values.consultationDate}
					className="border w-full p-2"
				/>
			</div>

		</div>
	);
};

export default DatesSection;