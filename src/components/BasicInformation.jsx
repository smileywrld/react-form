import { forwardRef, useImperativeHandle, useMemo } from "react";
import { useFormik } from "formik";

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

const BasicInformation = forwardRef(({ formData, onFormDataChange }, ref) => {
	const initialValues = useMemo(
		() => ({ ...defaultFormData, ...(formData ?? {}) }),
		[formData],
	);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues,
		onSubmit: (values) => {
			if (typeof onFormDataChange === "function") onFormDataChange(values);
		},
	});

	useImperativeHandle(ref, () => ({
		submit: () => formik.submitForm(),
	}));

	return (
		<div>
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
			</form>
		</div>
	);
});

BasicInformation.displayName = "BasicInformation";

export default BasicInformation;
