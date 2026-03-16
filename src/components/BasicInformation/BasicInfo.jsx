import React from "react";
import { useFormik } from "formik";

import CasePicSection from "./CasePicSection";
import ClientDetailsSection from "./ClientDetailsSection";
import DemographicsSection from "./DemographicsSection";
import DatesSection from "./DatesSection";
import EmergencyContactsSection from "./EmergencyContactsSection";
import ReferralSection from "./ReferralSection";
import AssignedPsychologistSection from "./AssignedPsychologistSection";

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
