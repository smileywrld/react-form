const STEP_LABELS = {
	"basic-information": "Basic Information",
	"case-type-selection": "Case Type Selection",
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

export const getStepLabel = (stepId, caseType) => {
	if (stepId === "intervention-plan") {
		if (caseType === "child-intervention")
			return "Intervention Plan for Child & Adolescent";
		if (caseType === "adult-intervention") return "Intervention Plan for Adult";
	}

	return STEP_LABELS[stepId] ?? stepId;
};

