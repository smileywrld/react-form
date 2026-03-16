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

			{/* Birthday and Consultation Date */}
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
						className="px-3 py-2 border border-[#576172] mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full"
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
						className="px-3 py-2 border border-[#576172] mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full"
					/>
				</div>
			</div>
		</>
	);
};

export default DemographicsSection;
