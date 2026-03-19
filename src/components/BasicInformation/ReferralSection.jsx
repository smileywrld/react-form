import React from "react";

const ReferralSection = ({ formik }) => {
	return (
		<div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
			{/* Referral Source */}
			<div>
				<label className="text-sm font-medium text-gray-700 mb-2">
					Referral Source <span className="text-red-600">*</span>
				</label>
				<div className="flex flex-wrap gap-x-4 gap-y-2">
					<label className="radio-option">
						<input
							type="radio"
							name="referralSource"
							id="referralSelf"
							value="self"
							checked={formik.values.referralSource === "self"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">
							Self
						</span>
					</label>

					<label className="radio-option">
						<input
							type="radio"
							name="referralSource"
							id="referralFamily"
							value="family"
							checked={formik.values.referralSource === "family"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">
							Family
						</span>
					</label>

					<label className="radio-option">
						<input
							type="radio"
							name="referralSource"
							id="referralSchool"
							value="school"
							checked={formik.values.referralSource === "school"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">
							School
						</span>
					</label>

					<label className="radio-option">
						<input
							type="radio"
							name="referralSource"
							id="referralHospital"
							value="hospital"
							checked={formik.values.referralSource === "hospital"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">
							Hospital
						</span>
					</label>

					<label className="radio-option">
						<input
							type="radio"
							name="referralSource"
							id="referralClinic"
							value="clinic"
							checked={formik.values.referralSource === "clinic"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">
							Clinic
						</span>
					</label>

					<div className="flex w-full flex-col gap-2 sm:flex-row sm:items-start">
						<label className="radio-option">
							<input
								type="radio"
								name="referralSource"
								id="referralOther"
								value="other"
								checked={formik.values.referralSource === "other"}
								onChange={formik.handleChange}
								className="custom-radio"
							/>
							<span className="block text-sm text-gray-700">
								Other
							</span>
						</label>

						{formik.values.referralSource === "other" && (
							<div className="w-full sm:ml-6 sm:mt-0">
								<input
									type="text"
									name="referralSourceOther"
									value={formik.values.referralSourceOther || ""}
									onChange={formik.handleChange}
									placeholder="Please specify..."
									className="block w-full rounded-md border border-[#DADEE3] p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
