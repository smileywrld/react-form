import React from "react";
import { useFormik } from "formik";

const BasicInformation = () => {
	const formik = useFormik({
		initialValues: {
			caseID: "",
			picName: "",
			picAge: "",
			fullName: "",
			Age: "",
			Sex: "",
			Ethnicity: "",
			Birthday: "",
			ConsultantDate: "",
			EmergContact: "",
			EmergContact2: "",
			Referral: "",
			AssignedPyshc: "",
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

			<form autoComplete="off" className="flex">
				<div className="flex gap-5 w-full">
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
							name="caseID"
							onChange={formik.handleChange}
							value={formik.values.picName}
							placeholder="Person in charge"
							type="text"
							className="border px-2 py-1 rounded-sm border-[#576172]"
						/>
					</div>

					<div className="flex flex-col gap-1 w-1/3">
						<label htmlFor="caseID" className="text-[#364153]">
							PIC Age <span className="text-red-600">*</span>
						</label>
						<input
							name="picAge"
							onChange={formik.handleChange}
							value={formik.values.picAge}
							placeholder="Age"
							type="text"
							className="border px-2 py-1 rounded-sm border-[#576172]"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BasicInformation;
