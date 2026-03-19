const BASIC_INFORMATION_FIELDS = [
	"caseID",
	"picName",
	"fullName",
	"age",
	"sex",
	"ethnicity",
	"birthday",
	"consultationDate",
	"emergContact",
	"referralSource",
	"assignedPsychologist",
];

const MENTAL_STATUS_FIELDS = [
	"mseAppearance",
	"mseAttitude",
	"mseBehavior",
	"mseSpeech",
	"mseMood",
	"mseAffect",
	"mseOrientationTime",
	"mseOrientationPlace",
	"mseOrientationPerson",
	"mseInsight",
];

export const getStepValidationFields = (stepId, caseType) => {
	switch (stepId) {
		case "basic-information":
			return BASIC_INFORMATION_FIELDS;
		case "case-type-selection":
			return ["caseType"];
		case "case-specific-concerns":
			return caseType === "adult-assessment" || caseType === "adult-intervention"
				? ["clientConcerns", "presentingProblems"]
				: ["parentsConcerns", "presentingProblems"];
		case "developmental-family-history":
			return caseType === "child-assessment" || caseType === "child-intervention"
				? ["birthTerm", "deliveryMode"]
				: [];
		case "mental-status-examination":
			return MENTAL_STATUS_FIELDS;
		case "assessment-treatment-plan":
			return caseType === "adult-assessment"
				? ["adultClinicalImpression", "adultAssessmentRecommendation"]
				: ["provisionalDiagnosis"];
		case "intervention-plan":
			return [
				"interventionClinicalImpression",
				"interventionCaseFormulation",
				"interventionSessionPlan",
				"interventionSafetyPlanDetails",
				"interventionFollowUpPlan",
			];
		default:
			return [];
	}
};

export const buildTouchedMap = (fields) =>
	fields.reduce((acc, field) => {
		acc[field] = true;
		return acc;
	}, {});

