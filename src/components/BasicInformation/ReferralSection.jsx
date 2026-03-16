import React from "react";

const ReferralSection = ({ formik }) => {
	return (
		<div className="grid lg:grid-cols-1 gap-6 md:grid-cols-2 mt-5">
			{/* Referral Source */}
			<div>
				<label className="text-sm font-medium text-gray-700 mb-2">
					Referral Source <span className="text-red-600">*</span>
				</label>
				<div className="space-y-2 flex gap-2 flex-wrap">
					<div className="flex items-center">
						<input
							type="radio"
							name="referralSource"
							id="referralSelf"
							value="self"
							checked={formik.values.referralSource === "self"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="referralSelf" className="ml-2 block text-sm text-gray-700">
							Self
						</label>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="referralSource"
							id="referralFamily"
							value="family"
							checked={formik.values.referralSource === "family"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="referralFamily" className="ml-2 block text-sm text-gray-700">
							Family
						</label>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="referralSource"
							id="referralSchool"
							value="school"
							checked={formik.values.referralSource === "school"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="referralSchool" className="ml-2 block text-sm text-gray-700">
							School
						</label>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="referralSource"
							id="referralHospital"
							value="hospital"
							checked={formik.values.referralSource === "hospital"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="referralHospital" className="ml-2 block text-sm text-gray-700">
							Hospital
						</label>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="referralSource"
							id="referralClinic"
							value="clinic"
							checked={formik.values.referralSource === "clinic"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="referralClinic" className="ml-2 block text-sm text-gray-700">
							Clinic
						</label>
					</div>

					<div className="flex items-start">
						<div className="flex items-center">
							<input
								type="radio"
								name="referralSource"
								id="referralOther"
								value="other"
								checked={formik.values.referralSource === "other"}
								onChange={formik.handleChange}
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
							/>
							<label htmlFor="referralOther" className="ml-2 block text-sm text-gray-700">
								Other
							</label>
						</div>

						{formik.values.referralSource === "other" && (
							<div className="ml-6 mt-2 w-full">
								<input
									type="text"
									name="referralSourceOther"
									value={formik.values.referralSourceOther || ""}
									onChange={formik.handleChange}
									placeholder="Please specify..."
									className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
								/>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Assigned Psychologist */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Assigned Psychologist <span className="text-red-600">*</span>
				</label>
				<div className="space-y-2">
					<div className="flex items-center">
						<input
							type="radio"
							name="assignedPsychologist"
							id="psychMsLee"
							value="ms-lee-li"
							checked={formik.values.assignedPsychologist === "ms-lee-li"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="psychMsLee" className="ml-2 block text-sm text-gray-700">
							Ms. Lee Li Li
						</label>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="assignedPsychologist"
							id="psychMsHiew"
							value="ms-hiew"
							checked={formik.values.assignedPsychologist === "ms-hiew"}
							onChange={formik.handleChange}
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
						/>
						<label htmlFor="psychMsHiew" className="ml-2 block text-sm text-gray-700">
							Ms. Hiew Yuk Wei
						</label>
					</div>

					<div className="flex items-start">
						<div className="flex items-center">
							<input
								type="radio"
								name="assignedPsychologist"
								id="psychOther"
								value="other"
								checked={formik.values.assignedPsychologist === "other"}
								onChange={formik.handleChange}
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
							/>
							<label htmlFor="psychOther" className="ml-2 block text-sm text-gray-700">
								Other
							</label>
						</div>

						{formik.values.assignedPsychologist === "other" && (
							<div className="ml-6 mt-2 w-full">
								<input
									type="text"
									name="assignedPsychologistOther"
									value={formik.values.assignedPsychologistOther || ""}
									onChange={formik.handleChange}
									placeholder="Please specify..."
									className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReferralSection;