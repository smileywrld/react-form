const KNOWN_CASE_TYPES = new Set([
	"child-assessment",
	"adult-assessment",
	"child-intervention",
	"adult-intervention",
]);

export const parseCaseType = (caseType) => {
	if (!caseType || typeof caseType !== "string") {
		return { population: null, mode: null };
	}
	if (!KNOWN_CASE_TYPES.has(caseType)) {
		return { population: null, mode: null };
	}

	const [population, mode] = caseType.split("-");
	return {
		population: population === "child" || population === "adult" ? population : null,
		mode: mode === "assessment" || mode === "intervention" ? mode : null,
	};
};

export const isAdult = (caseType) => parseCaseType(caseType).population === "adult";
export const isChild = (caseType) => parseCaseType(caseType).population === "child";
export const isAssessment = (caseType) =>
	parseCaseType(caseType).mode === "assessment";
export const isIntervention = (caseType) =>
	parseCaseType(caseType).mode === "intervention";

