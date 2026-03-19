import React from "react";

const AssignedPsychologistSection = ({ formik }) => {
	return (
		<div className="mt-5">
			<label className="block text-sm font-medium text-gray-700 mb-2">
				Assigned Psychologist <span className="text-red-600">*</span>
			</label>
			<div className="space-y-2 flex-col flex">
				<label className="radio-option">
					<input
						type="radio"
						name="assignedPsychologist"
						id="psychMsLee"
						value="ms-lee-li"
						checked={formik.values.assignedPsychologist === "ms-lee-li"}
						onChange={formik.handleChange}
						className="custom-radio"
					/>
					<span className="block text-sm text-gray-700">
						Ms. Lee Li Li
					</span>
				</label>

				<label className="radio-option">
					<input
						type="radio"
						name="assignedPsychologist"
						id="psychMsHiew"
						value="ms-hiew"
						checked={formik.values.assignedPsychologist === "ms-hiew"}
						onChange={formik.handleChange}
						className="custom-radio"
					/>
					<span className="block text-sm text-gray-700">
						Ms. Hiew Yuk Wei
					</span>
				</label>

				<div className="flex items-start">
					<label className="radio-option">
						<input
							type="radio"
							name="assignedPsychologist"
							id="psychOther"
							value="other"
							checked={formik.values.assignedPsychologist === "other"}
							onChange={formik.handleChange}
							className="custom-radio"
						/>
						<span className="block text-sm text-gray-700">Other</span>
					</label>

					{formik.values.assignedPsychologist === "other" && (
						<div className="ml-6 mt-2 w-full">
							<input
								type="text"
								name="assignedPsychologistOther"
								value={formik.values.assignedPsychologistOther || ""}
								onChange={formik.handleChange}
								placeholder="Please specify..."
								className="block w-full rounded-md border border-[#DADEE3] p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AssignedPsychologistSection;
