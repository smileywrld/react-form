import React from "react";
import { useFormikContext } from "formik";

// Import sections
import CasePicSection from "./BasicInformation/CasePicSection";
import ClientDetailsSection from "./BasicInformation/ClientDetailsSection";
import DemographicsSection from "./BasicInformation/DemographicsSection";
import EmergencySection from "./BasicInformation/EmergencySection";
import ReferralSection from "./BasicInformation/ReferralSection";
import AssignedPsychologistSection from "./BasicInformation/AssignedPsychologistSection";

const BasicInformation = React.forwardRef((_, ref) => {
	const formik = useFormikContext();

	React.useImperativeHandle(ref, () => ({
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

			<div autoComplete="off" className="flex flex-col">
				<CasePicSection formik={formik} />
				<ClientDetailsSection formik={formik} />
				<DemographicsSection formik={formik} />
				<EmergencySection formik={formik} />
				<ReferralSection formik={formik} />
				<AssignedPsychologistSection formik={formik} />
			</div>
		</div>
	);
});

BasicInformation.displayName = "BasicInformation";

export default BasicInformation;
