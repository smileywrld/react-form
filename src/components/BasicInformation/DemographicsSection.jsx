import React from "react";

const DemographicsSection = ({ formik }) => {
	return (
		<>
			{/* Ethnicity */}
			<div>
				<label className="block text-gray-700 mt-5">
					Ethnicity <span className="text-red-600">*</span>
				</label>
				<div className="flex gap-4 mt-2 flex-wrap">
					<label className="text-[#364153] flex items-center">
						<input
							type="radio"
							name="ethnicity"
							value="Malay"
							checked={formik.values.ethnicity === "Malay"}
							onChange={formik.handleChange}
							className="mx-1"
						/>
						Malay
					</label>

					<label className="text-[#364153] flex items-center">
						<input
							type="radio"
							name="ethnicity"
							value="Chinese"
							checked={formik.values.ethnicity === "Chinese"}
							onChange={formik.handleChange}
							className="mx-1"
						/>
						Chinese
					</label>

					<label className="text-[#364153] flex items-center">
						<input
							type="radio"
							name="ethnicity"
							value="Indians"
							checked={formik.values.ethnicity === "Indians"}
							onChange={formik.handleChange}
							className="mx-1"
						/>
						Indians
					</label>

					<label className="text-[#364153] flex items-center">
						<input
							type="radio"
							name="ethnicity"
							value="Others"
							checked={formik.values.ethnicity === "Others"}
							onChange={formik.handleChange}
							className="mx-1"
						/>
						Others
					</label>
				</div>
			</div>


		</>
	);
};

export default DemographicsSection;
