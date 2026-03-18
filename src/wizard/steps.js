import { SECTIONS_BY_CASE_TYPE } from "./sectionConfig";
import { getStepLabel } from "./stepLabels";
import { STEP_COMPONENTS } from "./stepRegistry";

export const getSteps = (caseType) => {
	const baseSteps = [
		{ id: "basic-information", label: getStepLabel("basic-information", caseType) },
		{
			id: "case-type-selection",
			label: getStepLabel("case-type-selection", caseType),
		},
	];

	const dynamicSectionIds = SECTIONS_BY_CASE_TYPE[caseType] ?? [];
	const dynamicSteps = dynamicSectionIds
		.map((id) => {
			if (!STEP_COMPONENTS[id]) return null;
			return { id, label: getStepLabel(id, caseType) };
		})
		.filter(Boolean);

	return [...baseSteps, ...dynamicSteps];
};

