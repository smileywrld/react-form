import "./App.css";
import { useCallback, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasicInformation from "./components/BasicInformation";
import CaseTypeSelection from "./components/CaseTypeSelection";
import Overview from "./components/Overview";

import CaseSpecificConcerns from "./components/CaseSections/CaseSpecificConcerns";
import DevelopmentalFamilyHistory from "./components/CaseSections/DevelopmentalFamilyHistory";
import MedicalAcademic from "./components/CaseSections/MedicalAcademic";
import SchoolReadiness from "./components/CaseSections/SchoolReadiness";
import AssessmentTreatmentPlan from "./components/CaseSections/AssessmentTreatmentPlan";
import OccupationalMaritalHistory from "./components/CaseSections/OccupationalMaritalHistory";
import MentalStatusExamination from "./components/CaseSections/MentalStatusExamination";
import InterventionPlan from "./components/CaseSections/InterventionPlan";
import ReviewSubmit from "./components/CaseSections/ReviewSubmit";

const DEFAULT_FORM_DATA = {
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

const SECTIONS_BY_CASE_TYPE = {
	"child-assessment": [
		"case-specific-concerns",
		"developmental-family-history",
		"medical-academic",
		"school-readiness",
		"assessment-treatment-plan",
		"occupational-marital-history",
		"mental-status-examination",
		"intervention-plan",
		"review-submit",
	],
	"adult-assessment": [
		"case-specific-concerns",
		"developmental-family-history",
		"medical-academic",
		"occupational-marital-history",
		"mental-status-examination",
		"assessment-treatment-plan",
		"review-submit",
	],
	"child-intervention": [
		"case-specific-concerns",
		"developmental-family-history",
		"medical-academic",
		"school-readiness",
		"mental-status-examination",
		"intervention-plan",
		"review-submit",
	],
	"adult-intervention": [
		"case-specific-concerns",
		"developmental-family-history",
		"medical-academic",
		"occupational-marital-history",
		"mental-status-examination",
		"intervention-plan",
		"review-submit",
	],
};

const STEP_COMPONENTS = {
	"case-specific-concerns": CaseSpecificConcerns,
	"developmental-family-history": DevelopmentalFamilyHistory,
	"medical-academic": MedicalAcademic,
	"school-readiness": SchoolReadiness,
	"assessment-treatment-plan": AssessmentTreatmentPlan,
	"occupational-marital-history": OccupationalMaritalHistory,
	"mental-status-examination": MentalStatusExamination,
	"intervention-plan": InterventionPlan,
	"review-submit": ReviewSubmit,
};

const STEP_LABELS = {
	"case-specific-concerns": "Case-Specific Concerns",
	"developmental-family-history": "Developmental & Family History",
	"medical-academic": "Medical & Academic",
	"school-readiness": "School Readiness",
	"assessment-treatment-plan": "Assessment & Treatment Plan",
	"occupational-marital-history": "Occupational & Marital History",
	"mental-status-examination": "Mental Status Examination",
	"intervention-plan": "Intervention Plan",
	"review-submit": "Review & Submit",
};

function App() {
	const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const basicInformationRef = useRef(null);

	const handleFormDataChange = useCallback((next) => {
		setFormData((prev) => {
			if (typeof next === "function") return next(prev);
			if (next && typeof next === "object") return { ...prev, ...next };
			return prev;
		});
	}, []);

	const steps = useMemo(() => {
		const baseSteps = [
			{ id: "basic-information", label: "Basic Information" },
			{ id: "case-type-selection", label: "Case Type Selection" },
		];

		const dynamicSectionIds = SECTIONS_BY_CASE_TYPE[formData.caseType] ?? [];
		const dynamicSteps = dynamicSectionIds
			.map((id) => {
				if (!STEP_COMPONENTS[id]) return null;
				return { id, label: STEP_LABELS[id] ?? id };
			})
			.filter(Boolean);

		return [...baseSteps, ...dynamicSteps];
	}, [formData.caseType]);

	const safeCurrentStepIndex = Math.min(
		currentStepIndex,
		Math.max(0, steps.length - 1),
	);

	const canGoPrevious = safeCurrentStepIndex > 0;
	const canGoNext = safeCurrentStepIndex < steps.length - 1;
	const currentStepId = steps[safeCurrentStepIndex]?.id;
	const nextDisabled =
		!canGoNext ||
		(currentStepId === "case-type-selection" && !formData.caseType);

	const handlePrevious = useCallback(() => {
		setCurrentStepIndex(Math.max(0, safeCurrentStepIndex - 1));
	}, [safeCurrentStepIndex]);

	const handleNext = useCallback(async () => {
		const stepId = steps[safeCurrentStepIndex]?.id;
		if (stepId === "basic-information") {
			await basicInformationRef.current?.submit?.();
		}
		if (stepId === "case-type-selection" && !formData.caseType) return;

		setCurrentStepIndex(Math.min(steps.length - 1, safeCurrentStepIndex + 1));
	}, [formData.caseType, safeCurrentStepIndex, steps]);

	const handleStepChange = useCallback(
		(index) => setCurrentStepIndex(index),
		[],
	);

	const content = useMemo(() => {
		if (currentStepId === "basic-information") {
			return (
				<BasicInformation
					ref={basicInformationRef}
					formData={formData}
					onFormDataChange={handleFormDataChange}
				/>
			);
		}

		if (currentStepId === "case-type-selection") {
			return (
				<CaseTypeSelection
					formData={formData}
					onFormDataChange={handleFormDataChange}
				/>
			);
		}

		const DynamicComponent = STEP_COMPONENTS[currentStepId];
		if (!DynamicComponent) return null;
		return <DynamicComponent />;
	}, [currentStepId, formData, handleFormDataChange]);

	return (
		<div className="min-h-screen bg-gray-200 p-6">
			<div className="max-w-6xl mx-auto space-y-6">
				<Overview formData={formData} />

				<div className="bg-white rounded-xl shadow-md p-6">
					<Header
						steps={steps}
						currentStepIndex={safeCurrentStepIndex}
						onStepChange={handleStepChange}
					/>

					<div className="mt-6">{content}</div>

					<Footer
						onPrevious={handlePrevious}
						onNext={handleNext}
						previousDisabled={!canGoPrevious}
						nextDisabled={nextDisabled}
						nextLabel={safeCurrentStepIndex === steps.length - 1 ? "Submit" : "Next"}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
