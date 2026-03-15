import React from "react";
import { useFormik } from "formik";

const BasicForm = () => {
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
};

console.log(BasicForm);

const BasicInformation = () => {
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
				<div className="flex flex-col gap-1">
					<label htmlFor="caseID" className="text-[#364153]">
						Case ID <span className="text-red-600">*</span>
					</label>
					<input
						value={formik.values.caseID}
						placeholder="Auto Generated"
						type="text"
						className="border px-2 py-1 rounded-sm border-[#576172]"
					/>
				</div>
			</form>
		</div>
	);
};

export default BasicInformation;
