import React from "react";
import { useFormik } from "formik"; // Only need useFormik

const BasicInformation = () => {
	const formik = useFormik({
		initialValues: {
			caseID: "",
			picName: "",
			picAge: "",
			fullName: "",
			age: "",
			sex: "",
			ethnicity: "",
			birthday: "",
			consultationDate: "",
			emergContact: "", // Note: emergContact (not emergencyContact1)
			emergContact2: "", // Note: emergContact2 (not emergencyContact2)
			referralClinic: "",
			assignedPsych: "",
		},
	});

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Basic Information
				</h2>
				<p className="text-gray-500">Questions 1 - 10</p>
				<hr className="border-[#F3F4F6] mt-3"></hr>
			</div>

			<form autoComplete="off" className="flex flex-col ">
				{/* Row 1: Case ID, PIC Name, PIC Age */}
				<div className="flex gap-5 w-full mt-5 lg:flex-nowrap flex-wrap items-center justify-start">
					<div className="flex flex-col gap-1 w-1/3">
						<label htmlFor="caseID" className="text-[#364153]">
							Case ID <span className="text-red-600">*</span>
						</label>
						<input
							name="caseID"
							onChange={formik.handleChange}
							value={formik.values.caseID}
							placeholder="Auto Generated"
							type="text"
							className="border px-2 py-1 rounded-sm border-[#576172]"
						/>
					</div>

					<div className="flex flex-col gap-1 w-1/3">
						<label htmlFor="picName" className="text-[#364153]">
							PIC Name <span className="text-red-600">*</span>
						</label>
						<input
							name="picName"
							onChange={formik.handleChange}
							value={formik.values.picName}
							placeholder="Person in charge"
							type="text"
							className="border px-2 py-1 rounded-sm border-[#576172]"
						/>
					</div>

					<div className="flex flex-col gap-1 w-1/3">
						<label htmlFor="picAge" className="text-[#364153]">
							PIC Age <span className="text-red-600">*</span>
						</label>
						<input
							name="picAge"
							onChange={formik.handleChange}
							value={formik.values.picAge}
							placeholder="Age"
							type="number"
							className="border px-2 py-1 rounded-sm border-[#576172]"
						/>
					</div>
				</div>

				{/* Full Name */}
				<div className="flex flex-col gap-1 mt-5">
					<label htmlFor="fullName" className="text-[#364153]">
						Client Full Name <span className="text-red-600">*</span>
					</label>
					<input
						name="fullName"
						onChange={formik.handleChange}
						value={formik.values.fullName}
						className="w-full border px-2 py-1 rounded-sm border-[#576172]"
						placeholder="Full name"
					/>
				</div>

				{/* Age and Sex */}
				<div className="grid grid-cols-2 gap-4 mt-5">
					<div>
						<label htmlFor="age" className="text-[#364153]">
							Age <span className="text-red-600">*</span>
						</label>
						<input
							name="age" // Fixed: lowercase 'age'
							type="number"
							onChange={formik.handleChange}
							value={formik.values.age}
							className="w-full px-3 py-2 border rounded-sm border-[#576172]"
						/>
					</div>

					<div>
						<label className="text-[#364153]">
							Sex <span className="text-red-600">*</span>
						</label>
						<div className="flex gap-4 mt-1">
							<label className="text-[#364153]">
								<input
									type="radio"
									name="sex" // Fixed: lowercase 'sex'
									value="Male"
									checked={formik.values.sex === "Male"} // Added checked
									onChange={formik.handleChange}
									className="mx-1"
								/>
								Male
							</label>

							<label className="text-[#364153]">
								<input
									type="radio"
									name="sex" // Fixed: lowercase 'sex'
									value="Female"
									checked={formik.values.sex === "Female"} // Added checked
									onChange={formik.handleChange}
									className="mx-1"
								/>
								Female
							</label>

							<label className="text-[#364153]">
								<input
									type="radio"
									name="sex" // Fixed: lowercase 'sex'
									value="Other"
									checked={formik.values.sex === "Other"} // Added checked
									onChange={formik.handleChange}
									className="mx-1"
								/>
								Other
							</label>
						</div>
					</div>
				</div>

				{/* Ethnicity */}
				<div>
					<label className="block text-gray-700 mt-5">
						Ethnicity <span className="text-red-600">*</span>
					</label>
					<div className="flex gap-4 mt-2">
						<label className="text-[#364153]">
							<input
								type="radio"
								name="ethnicity" // Fixed: lowercase 'ethnicity'
								value="Malay"
								checked={formik.values.ethnicity === "Malay"} // Added checked
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Malay
						</label>

						<label className="text-[#364153]">
							<input
								type="radio"
								name="ethnicity" // Fixed: lowercase 'ethnicity'
								value="Chinese"
								checked={formik.values.ethnicity === "Chinese"} // Added checked
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Chinese
						</label>

						<label className="text-[#364153]">
							<input
								type="radio"
								name="ethnicity" // Fixed: lowercase 'ethnicity'
								value="Indians"
								checked={formik.values.ethnicity === "Indians"} // Added checked
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Indians
						</label>

						<label className="text-[#364153]">
							<input
								type="radio"
								name="ethnicity" // Fixed: lowercase 'ethnicity'
								value="Others"
								checked={formik.values.ethnicity === "Others"} // Added checked
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
							1st Consultation Date{" "}
							<span className="text-red-600">*</span>
						</label>
						<input
							name="consultationDate" // Fixed: lowercase 'c'
							type="date"
							onChange={formik.handleChange}
							value={formik.values.consultationDate}
							className="px-3 py-2 border border-[#576172] mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full"
						/>
					</div>
				</div>

				{/* Emergency Contacts - Fixed to use regular inputs instead of Field */}
				<div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:grid-cols-2 mt-5">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Emergency Contact 1 <span className="text-red-600">*</span>
						</label>
						<textarea
							name="emergContact" // Fixed: matches initialValues
							rows={4}
							onChange={formik.handleChange}
							value={formik.values.emergContact}
							placeholder="Name, relationship, phone number, address"
							className="resize-none mt-1 block w-full rounded-md border border-[#576172] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Emergency Contact 2
						</label>
						<textarea
							name="emergContact2" // Fixed: matches initialValues
							rows={4}
							onChange={formik.handleChange}
							value={formik.values.emergContact2}
							placeholder="Name, relationship, phone number, address"
							className="resize-none mt-1 block w-full rounded-md border border-[#576172] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
						/>
					</div>
				</div>

				{/* Referral & Assigned Psychologist */}
				{/* Referral & Assigned Psychologist */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{/* Referral Source */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Referral Source <span className="text-red-600">*</span>
						</label>

						<div className="space-y-2">
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
								<label
									htmlFor="referralSelf"
									className="ml-2 block text-sm text-gray-700"
								>
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
								<label
									htmlFor="referralFamily"
									className="ml-2 block text-sm text-gray-700"
								>
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
								<label
									htmlFor="referralSchool"
									className="ml-2 block text-sm text-gray-700"
								>
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
								<label
									htmlFor="referralHospital"
									className="ml-2 block text-sm text-gray-700"
								>
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
								<label
									htmlFor="referralClinic"
									className="ml-2 block text-sm text-gray-700"
								>
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
									<label
										htmlFor="referralOther"
										className="ml-2 block text-sm text-gray-700"
									>
										Other
									</label>
								</div>

								{/* Other text input - shows only when "Other" is selected */}
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
						<ErrorMessage
							name="referralSource"
							component="div"
							className="mt-1 text-xs text-red-600"
						/>
					</div>

					{/* Assigned Psychologist */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Assigned Psychologist{" "}
							<span className="text-red-600">*</span>
						</label>

						<div className="space-y-2">
							<div className="flex items-center">
								<input
									type="radio"
									name="assignedPsychologist"
									id="psychMsLee"
									value="ms-lee-li"
									checked={
										formik.values.assignedPsychologist === "ms-lee-li"
									}
									onChange={formik.handleChange}
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
								/>
								<label
									htmlFor="psychMsLee"
									className="ml-2 block text-sm text-gray-700"
								>
									Ms. Lee Li Li
								</label>
							</div>

							<div className="flex items-center">
								<input
									type="radio"
									name="assignedPsychologist"
									id="psychMsHiew"
									value="ms-hiew"
									checked={
										formik.values.assignedPsychologist === "ms-hiew"
									}
									onChange={formik.handleChange}
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
								/>
								<label
									htmlFor="psychMsHiew"
									className="ml-2 block text-sm text-gray-700"
								>
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
										checked={
											formik.values.assignedPsychologist === "other"
										}
										onChange={formik.handleChange}
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
									/>
									<label
										htmlFor="psychOther"
										className="ml-2 block text-sm text-gray-700"
									>
										Other
									</label>
								</div>

								{/* Other text input - shows only when "Other" is selected */}
								{formik.values.assignedPsychologist === "other" && (
									<div className="ml-6 mt-2 w-full">
										<input
											type="text"
											name="assignedPsychologistOther"
											value={
												formik.values.assignedPsychologistOther ||
												""
											}
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
			</form>
		</div>
	);
};

export default BasicInformation;
