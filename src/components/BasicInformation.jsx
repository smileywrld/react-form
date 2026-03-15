import React from "react";
import { useFormik } from "formik";

const BasicForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
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
				<div className="flex flex-col">
					<label htmlFor="caseID" className="text-[#364153]">
						Case ID <span className="text-red-600">*</span>
					</label>
					<input type="text" className="border"/>
				</div>
			</form>
		</div>
	);
};

export default BasicInformation;
