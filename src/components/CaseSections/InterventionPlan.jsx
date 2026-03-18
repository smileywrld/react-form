import { useFormikContext } from "formik";

const clinicalImpressionOptions = [
	"Depressive Disorder",
	"Anxiety Disorder",
	"Bipolar Disorder",
	"OCD (Obsessive-Compulsive Disorder)",
	"PTSD (Post-Traumatic Stress Disorder)",
	"Adjustment Disorder",
	"Personality Disorder",
	"Substance Use Disorder",
	"Other",
];

const sessionPlanOptions = [
	"Establish treatment goals",
	"Psychoeducation",
	"Cognitive restructuring",
	"Behavioral activation",
	"Exposure therapy",
	"Relaxation techniques",
	"Mindfulness training",
	"Problem-solving skills",
	"Emotion regulation",
	"Suicidal precautions",
	"Crisis intervention",
	"Relapse prevention",
];

const clientRecommendationOptions = [
	"Develop treatment goals",
	"Maintain mood diary",
	"SMART plan (Specific, Measurable, Achievable, Relevant, Time-bound)",
	"Sleep hygiene",
	"Exercise routine",
	"Social activities",
	"Limit alcohol/substances",
	"Medication compliance",
	"Self-monitoring",
];

const referralOptions = [
	"Psychiatrist (medication evaluation)",
	"Primary care physician",
	"Support groups",
	"Community mental health services",
	"Crisis hotline",
	"Substance abuse treatment",
	"Vocational counseling",
	"None required",
	"Other",
];

const toggleFromArray = (arr, value) =>
	arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

const InterventionPlan = () => {
	const { values, setFieldValue } = useFormikContext();
	const clinicalImpression = values.interventionClinicalImpression;
	const differentialDiagnosis = values.interventionDifferentialDiagnosis;
	const caseFormulation = values.interventionCaseFormulation;
	const assessmentRequirement = values.interventionAssessmentRequirement;
	const sessionPlan = values.interventionSessionPlan;
	const safetyPlanDetails = values.interventionSafetyPlanDetails;
	const clientRecommendations = values.interventionClientRecommendations;
	const homeworkTasks = values.interventionHomeworkTasks;
	const referrals = values.interventionReferrals;
	const followUpPlan = values.interventionFollowUpPlan;

	const toggleArrayField = (field, option) => {
		setFieldValue(field, toggleFromArray(values[field] ?? [], option));
	};

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">Intervention Plan</h2>
				<p className="text-gray-500 text-sm">
					Psychotherapy &amp; Intervention Plan (Questions 99-110)
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Clinical Impression <span className="text-red-500">*</span>
					</label>
					<div className="space-y-3">
						{clinicalImpressionOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="interventionClinicalImpression"
									value={opt}
									checked={clinicalImpression === opt}
									onChange={(e) =>
										setFieldValue(
											"interventionClinicalImpression",
											e.target.value,
										)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Differential Diagnosis
					</label>
					<textarea
						value={differentialDiagnosis}
						onChange={(e) =>
							setFieldValue(
								"interventionDifferentialDiagnosis",
								e.target.value,
							)
						}
						rows={4}
						placeholder="List alternative diagnoses to consider..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Case Formulation <span className="text-red-500">*</span>
					</label>
					<textarea
						value={caseFormulation}
						onChange={(e) =>
							setFieldValue("interventionCaseFormulation", e.target.value)
						}
						rows={4}
						placeholder="Provide comprehensive case formulation including predisposing, precipitating, perpetuating, and protective factors..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Assessment Requirement
					</label>
					<div className="flex flex-wrap gap-6">
						{[
							{ value: "yes", label: "Yes" },
							{ value: "no", label: "No" },
							{ value: "maybe", label: "Maybe" },
						].map((opt) => (
							<label key={opt.value} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="interventionAssessmentRequirement"
									value={opt.value}
									checked={assessmentRequirement === opt.value}
									onChange={(e) =>
										setFieldValue(
											"interventionAssessmentRequirement",
											e.target.value,
										)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt.label}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Session Plan <span className="text-red-500">*</span>
					</label>
					<div className="space-y-3">
						{sessionPlanOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={sessionPlan.includes(opt)}
									onChange={() =>
										toggleArrayField("interventionSessionPlan", opt)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Safety Plan Details <span className="text-red-500">*</span>
					</label>
					<textarea
						value={safetyPlanDetails}
						onChange={(e) =>
							setFieldValue(
								"interventionSafetyPlanDetails",
								e.target.value,
							)
						}
						rows={4}
						placeholder="Document detailed safety plan including: warning signs, coping strategies, people/places for support, professionals to contact, methods to secure environment..."
						className="w-full border border-red-200 bg-white rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Client Recommendations
					</label>
					<div className="space-y-3">
						{clientRecommendationOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={clientRecommendations.includes(opt)}
									onChange={() =>
										toggleArrayField("interventionClientRecommendations", opt)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Homework/Between-Session Tasks
					</label>
					<textarea
						value={homeworkTasks}
						onChange={(e) =>
							setFieldValue("interventionHomeworkTasks", e.target.value)
						}
						rows={4}
						placeholder="Specify homework assignments, self-monitoring tasks, practice exercises..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Referrals
					</label>
					<div className="space-y-3">
						{referralOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={referrals.includes(opt)}
									onChange={() =>
										toggleArrayField("interventionReferrals", opt)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Follow-up Plan <span className="text-red-500">*</span>
					</label>
					<textarea
						value={followUpPlan}
						onChange={(e) =>
							setFieldValue("interventionFollowUpPlan", e.target.value)
						}
						rows={4}
						placeholder="Specify frequency of sessions, duration of treatment, review points, termination criteria..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default InterventionPlan;
