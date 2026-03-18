import * as Yup from "yup";

const setIn = (obj, path, value) => {
	if (!path) return obj;
	const keys = path.split(".").filter(Boolean);
	let cur = obj;
	for (let i = 0; i < keys.length - 1; i += 1) {
		const key = keys[i];
		if (cur[key] == null || typeof cur[key] !== "object") cur[key] = {};
		cur = cur[key];
	}
	cur[keys[keys.length - 1]] = value;
	return obj;
};

const yupToFormikErrors = (yupError) => {
	const errors = {};
	if (!yupError?.inner?.length) {
		if (yupError?.path) setIn(errors, yupError.path, yupError.message);
		return errors;
	}
	yupError.inner.forEach((err) => {
		if (!err?.path) return;
		setIn(errors, err.path, err.message);
	});
	return errors;
};

const requiredString = (label) =>
	Yup.string().trim().required(`${label} is required`);

const optionalString = () => Yup.string().trim();

const requiredArrayMin1 = (label) =>
	Yup.array().of(Yup.string()).min(1, `Select at least one ${label}`).required();

export const getValidationSchema = (caseType) => {
	const base = {
		caseType: requiredString("Case Type"),

		caseID: requiredString("Case ID"),
		picName: requiredString("PIC Name"),
		picAge: optionalString(),

		fullName: requiredString("Client's Full Name"),
		age: requiredString("Age"),
		sex: requiredString("Sex"),
		ethnicity: requiredString("Ethnicity"),
		birthday: requiredString("Birthday"),
		consultationDate: requiredString("Consultation Date"),

		emergContact: requiredString("Emergency Contact 1"),
		emergContact2: optionalString(),

		referralSource: requiredString("Referral Source"),
		referralSourceOther: optionalString(),

		assignedPsychologist: requiredString("Assigned Psychologist"),
		assignedPsychologistOther: optionalString(),
	};

	const childAssessment = {
		parentsConcerns: requiredString("Parent's Concerns"),
		presentingProblems: requiredString("Presenting Problems"),
		birthTerm: requiredString("Birth Term"),
		deliveryMode: requiredString("Delivery Mode"),

		mseAppearance: requiredString("Appearance"),
		mseAttitude: requiredString("Attitude"),
		mseBehavior: requiredString("Behavior"),
		mseSpeech: requiredString("Speech"),
		mseMood: requiredString("Mood"),
		mseAffect: requiredString("Affect"),
		mseOrientationTime: requiredString("Orientation - Time"),
		mseOrientationPlace: requiredString("Orientation - Place"),
		mseOrientationPerson: requiredString("Orientation - Person"),
		mseInsight: requiredString("Insight"),

		provisionalDiagnosis: requiredArrayMin1("provisional diagnosis"),
	};

	const adultAssessment = {
		clientConcerns: requiredString("Client's Concerns"),
		presentingProblems: requiredString("Presenting Problems"),

		mseAppearance: requiredString("Appearance"),
		mseAttitude: requiredString("Attitude"),
		mseBehavior: requiredString("Behavior"),
		mseSpeech: requiredString("Speech"),
		mseMood: requiredString("Mood"),
		mseAffect: requiredString("Affect"),
		mseOrientationTime: requiredString("Orientation - Time"),
		mseOrientationPlace: requiredString("Orientation - Place"),
		mseOrientationPerson: requiredString("Orientation - Person"),
		mseInsight: requiredString("Insight"),

		adultClinicalImpression: requiredString("Clinical Impression"),
		adultAssessmentRecommendation: requiredString("Assessment Recommendation"),
	};

	const childIntervention = {
		parentsConcerns: requiredString("Parent's Concerns"),
		presentingProblems: requiredString("Presenting Problems"),

		mseAppearance: requiredString("Appearance"),
		mseAttitude: requiredString("Attitude"),
		mseBehavior: requiredString("Behavior"),
		mseSpeech: requiredString("Speech"),
		mseMood: requiredString("Mood"),
		mseAffect: requiredString("Affect"),
		mseOrientationTime: requiredString("Orientation - Time"),
		mseOrientationPlace: requiredString("Orientation - Place"),
		mseOrientationPerson: requiredString("Orientation - Person"),
		mseInsight: requiredString("Insight"),

		interventionClinicalImpression: requiredString("Clinical Impression"),
		interventionCaseFormulation: requiredString("Case Formulation"),
		interventionSessionPlan: requiredArrayMin1("session plan item"),
		interventionSafetyPlanDetails: requiredString("Safety Plan Details"),
		interventionFollowUpPlan: requiredString("Follow-up Plan"),
	};

	const adultIntervention = {
		clientConcerns: requiredString("Client's Concerns"),
		presentingProblems: requiredString("Presenting Problems"),

		mseAppearance: requiredString("Appearance"),
		mseAttitude: requiredString("Attitude"),
		mseBehavior: requiredString("Behavior"),
		mseSpeech: requiredString("Speech"),
		mseMood: requiredString("Mood"),
		mseAffect: requiredString("Affect"),
		mseOrientationTime: requiredString("Orientation - Time"),
		mseOrientationPlace: requiredString("Orientation - Place"),
		mseOrientationPerson: requiredString("Orientation - Person"),
		mseInsight: requiredString("Insight"),

		interventionClinicalImpression: requiredString("Clinical Impression"),
		interventionCaseFormulation: requiredString("Case Formulation"),
		interventionSessionPlan: requiredArrayMin1("session plan item"),
		interventionSafetyPlanDetails: requiredString("Safety Plan Details"),
		interventionFollowUpPlan: requiredString("Follow-up Plan"),
	};

	const conditional =
		caseType === "child-assessment"
			? childAssessment
			: caseType === "adult-assessment"
				? adultAssessment
				: caseType === "child-intervention"
					? childIntervention
					: caseType === "adult-intervention"
						? adultIntervention
						: {};

	return Yup.object().shape({
		...base,
		...conditional,

		// Always allow these shapes (prevents Yup from treating them as "invalid type")
		developmentalMilestones: Yup.object().default({}),
		medicalConditions: Yup.array().of(Yup.string()).default([]),
		schoolReadinessPersonalInfo: Yup.object().default({}),
		schoolReadinessReading: Yup.object().default({}),
		schoolReadinessWriting: Yup.object().default({}),
		schoolReadinessMath: Yup.object().default({}),
		communicationMethods: Yup.array().of(Yup.string()).default([]),
		treatmentFrequency: Yup.object().default({}),
		parentRecommendations: Yup.array().of(Yup.string()).default([]),
		assessmentRecommendations: Yup.array().of(Yup.string()).default([]),
		followupTimeline: Yup.array().of(Yup.string()).default([]),
		referrals: Yup.array().of(Yup.string()).default([]),
		interventionClientRecommendations: Yup.array().of(Yup.string()).default([]),
		interventionReferrals: Yup.array().of(Yup.string()).default([]),
	});
};

export const validateWithSchema = async (values) => {
	try {
		const schema = getValidationSchema(values?.caseType);
		await schema.validate(values, { abortEarly: false });
		return {};
	} catch (err) {
		return yupToFormikErrors(err);
	}
};

