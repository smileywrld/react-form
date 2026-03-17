import React from "react";
import { useFormik } from "formik";
import ProgressBar from "./ProgressBar";

// Import sections
import CasePicSection from "./BasicInformation/CasePicSection";
import ClientDetailsSection from "./BasicInformation/ClientDetailsSection";
import DemographicsSection from "./BasicInformation/DemographicsSection";
import EmergencySection from "./BasicInformation/EmergencySection";
import ReferralSection from "./BasicInformation/ReferralSection";

const defaultFormData = {
	caseID: "",
	picName: "",
	picAge: "",
	fullName: "",
	age: "",
	sex: "",
	ethnicity: "",
	birthday: "",
	consultationDate: "",
	emergContact: "",
	emergContact2: "",
	referralSource: "",
	referralSourceOther: "",
	assignedPsychologist: "",
	assignedPsychologistOther: "",
};

const BasicInformation = ({ formData, onFormDataChange, onNext }) => {
	const initialValues = React.useMemo(
		() => ({ ...defaultFormData, ...(formData ?? {}) }),
		[formData],
	);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues,
		onSubmit: (values) => {
			if (typeof onFormDataChange === "function") onFormDataChange(values);
			if (typeof onNext === "function") onNext();
		},
	});

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
			{/* Progress Bar */}
			<ProgressBar currentStep={1} totalSteps={2} />

			{/* Header Section */}
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Basic Information
				</h2>
				<p className="text-gray-500">Questions 1 - 10</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			{/* Form */}
			<form
				autoComplete="off"
				className="flex flex-col"
				onSubmit={formik.handleSubmit}
			>
				<CasePicSection formik={formik} />
				<ClientDetailsSection formik={formik} />
				<DemographicsSection formik={formik} />
				<EmergencySection formik={formik} />
				<ReferralSection formik={formik} />

				{/* Navigation Buttons */}
				<div className="flex justify-between pt-6">
					<button
						type="button"
						className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
					>
						Previous
					</button>
					<button
						type="button"
						className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
					>
						Save Draft
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Next
					</button>
				</div>
			</form>
		</div>
	);
};

export default BasicInformation;
