import React from "react";
import { useFormik } from "formik";

import CasePicSection from "./BasicInformation/CasePicSection";
import ClientDetailsSection from "./BasicInformation/ClientDetailsSection";
import DemographicsSection from "./BasicInformation/DemographicsSection";
import DatesSection from "./BasicInformation/DatesSection";
import EmergencyContactsSection from "./BasicInformation/EmergencyContactsSection";
import ReferralSection from "./BasicInformation/ReferralSection";
import AssignedPsychologistSection from "./BasicInformation/AssignedPsychologistSection";

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
			emergContact: "",
			emergContact2: "",
			referralSource: "",
			referralSourceOther: "",
			assignedPsychologist: "",
			assignedPsychologistOther: "",
		},
	});

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Basic Information
				</h2>
				<p className="text-gray-500">Questions 1 - 10</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<form className="flex flex-col">
				<CasePicSection formik={formik} />
				<ClientDetailsSection formik={formik} />
				<DemographicsSection formik={formik} />
				<DatesSection formik={formik} />
				<EmergencyContactsSection formik={formik} />
				<ReferralSection formik={formik} />
				<AssignedPsychologistSection formik={formik} />
			</form>
		</div>
	);
};

export default BasicInformation;
