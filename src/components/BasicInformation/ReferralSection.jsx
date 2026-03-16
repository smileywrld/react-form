import React from "react";

const EmergencyContactsSection = ({ formik }) => {
	return (
		<div className="grid md:grid-cols-2 gap-6 mt-5">

			<div>
				<label>Emergency Contact 1 *</label>

				<textarea
					name="emergContact"
					rows={4}
					onChange={formik.handleChange}
					value={formik.values.emergContact}
					className="w-full border p-2"
				/>
			</div>

			<div>
				<label>Emergency Contact 2</label>

				<textarea
					name="emergContact2"
					rows={4}
					onChange={formik.handleChange}
					value={formik.values.emergContact2}
					className="w-full border p-2"
				/>
			</div>

		</div>
	);
};

export default EmergencyContactsSection;