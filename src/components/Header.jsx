import React, { useCallback, useMemo, useState } from "react";
import BasicInformation from "./BasicInformation";
import CaseTypeSelection from "./CaseTypeSelection";

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
	caseType: "",
};

const Header = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState(defaultFormData);

	const handleFormDataChange = useCallback((next) => {
		setFormData((prev) => {
			if (typeof next === "function") return next(prev);
			if (next && typeof next === "object") return { ...prev, ...next };
			return prev;
		});
	}, []);

	const handleNext = useCallback(() => {
		setCurrentStep((s) => Math.min(2, s + 1));
	}, []);

	const handlePrevious = useCallback(() => {
		setCurrentStep((s) => Math.max(1, s - 1));
	}, []);

	const stepTitle = useMemo(
		() => (currentStep === 1 ? "Basic Information" : "Case Type Selection"),
		[currentStep],
	);
	const sectionLabel = useMemo(
		() => `Section ${currentStep} of 2`,
		[currentStep],
	);
	const percentComplete = useMemo(
		() => (currentStep === 1 ? "50% Complete" : "100% Complete"),
		[currentStep],
	);

	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<p className="text-gray-500">{sectionLabel}</p>
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-800">{stepTitle}</h2>

				<p className="text-gray-500">{percentComplete}</p>
			</div>

			<div className="flex gap-3 mt-4">
				<button
					type="button"
					onClick={() => setCurrentStep(1)}
					className={`btn border p-1 rounded-md ${
						currentStep === 1
							? "bg-[#E0E7FF] border-[#A3B3FF] text-[#432DD7]"
							: "bg-[#F3F4F6] text-[#4A5565]"
					}`}
				>
					Basic Information
				</button>
				<button
					type="button"
					onClick={() => setCurrentStep(2)}
					className={`btn p-1 rounded-md ${
						currentStep === 2
							? "bg-[#E0E7FF] border border-[#A3B3FF] text-[#432DD7]"
							: "bg-[#F3F4F6] text-[#4A5565]"
					}`}
				>
					Case Type Selection
				</button>
			</div>

			{currentStep === 1 ? (
				<BasicInformation
					formData={formData}
					onFormDataChange={handleFormDataChange}
					onNext={handleNext}
				/>
			) : (
				<CaseTypeSelection
					formData={formData}
					onFormDataChange={handleFormDataChange}
					onPrevious={handlePrevious}
					onNext={() => {}}
				/>
			)}
		</div>
	);
};

export default Header;
