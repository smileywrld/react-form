import React from "react";

const DemographicsSection = ({ formik }) => {
	return (
		<>
			{/* Ethnicity */}
			<div>
				<label className="block text-gray-700 mt-5">
					Ethnicity <span className="text-red-600">*</span>
				</label>
				<div className="mt-2 flex flex-wrap gap-4">
					<label className="radio-option text-[#364153]">
						<input
							type="radio"
							name="ethnicity"
							value="Malay"
							checked={formik.values.ethnicity === "Malay"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						Malay
					</label>

					<label className="radio-option text-[#364153]">
						<input
							type="radio"
							name="ethnicity"
							value="Chinese"
							checked={formik.values.ethnicity === "Chinese"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						Chinese
					</label>

					<label className="radio-option text-[#364153]">
						<input
							type="radio"
							name="ethnicity"
							value="Indians"
							checked={formik.values.ethnicity === "Indians"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						Indians
					</label>

					<label className="radio-option text-[#364153]">
						<input
							type="radio"
							name="ethnicity"
							value="Others"
							checked={formik.values.ethnicity === "Others"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						Others
					</label>
				</div>
			</div>


		</>
	);
};

export default DemographicsSection;
