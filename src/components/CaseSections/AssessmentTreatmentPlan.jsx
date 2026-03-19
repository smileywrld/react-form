import { useFormikContext } from "formik";

const diagnosisOptions = [
	"ASD (Autism Spectrum Disorder)",
	"ADHD (Attention-Deficit/Hyperactivity Disorder)",
	"SLD (Specific Learning Disorder)",
	"IDD (Intellectual Developmental Disorder)",
	"Anxiety Disorder",
	"Depression",
	"ODD (Oppositional Defiant Disorder)",
	"CD (Conduct Disorder)",
	"Other",
];

const treatmentRows = [
	"SCDLIP (Speech & Communication)",
	"CDLIP (Cognitive Development)",
	"ABA (Applied Behavior Analysis)",
	"CL (Counseling)",
	"CLC (Clinical Counseling)",
];

const frequencyOptions = [
	"1x/week",
	"2x/week",
	"3x/week",
	"4x/week",
	"5x/week",
	"N/A",
];

const parentRecommendationOptions = [
	"Psychoeducation",
	"Parenting skills training",
	"Diet control",
	"Gadget/screen time control",
	"Sleep hygiene",
	"Structured routine",
	"Positive reinforcement strategies",
	"Behavior management",
	"School collaboration",
	"Support group participation",
];

const assessmentRecommendationOptions = [
	"IQ Test (WISC/WPPSI)",
	"ASD Assessment (ADOS-2)",
	"ADHD Assessment",
	"SLD Assessment",
	"Projective tests",
	"Behavioral assessment",
	"Speech & language assessment",
	"Occupational therapy assessment",
	"None required",
	"Other",
];

const followupTimelineOptions = [
	"1 week",
	"2 weeks",
	"1 month",
	"3 months",
	"6 months",
	"As needed",
];

const referralOptions = [
	"Pediatrician",
	"Psychiatrist",
	"Neurologist",
	"Speech therapist",
	"Occupational therapist",
	"Special education teacher",
	"School counselor",
	"Social services",
	"None required",
	"Other",
];

const toggleFromArray = (arr, value) =>
	arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

const AssessmentTreatmentPlan = () => {
	const { values, setFieldValue } = useFormikContext();
	const isAdultAssessment = values.caseType === "adult-assessment";

	const adultClinicalImpression = values.adultClinicalImpression;
	const adultComorbidityPresent = values.adultComorbidityPresent;
	const adultAssessmentRecommendation = values.adultAssessmentRecommendation;
	const adultAssessmentJustification = values.adultAssessmentJustification;

	const provisionalDiagnosis = values.provisionalDiagnosis;
	const treatmentFrequency = values.treatmentFrequency;
	const parentRecommendations = values.parentRecommendations;
	const assessmentRecommendations = values.assessmentRecommendations;
	const followupTimeline = values.followupTimeline;
	const referrals = values.referrals;

	const toggleArrayField = (field, option) => {
		setFieldValue(field, toggleFromArray(values[field] ?? [], option));
	};

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					{isAdultAssessment ? "Assessment Plan" : "Assessment & Treatment Plan"}
				</h2>
				<p className="text-gray-500 text-sm">
					{isAdultAssessment
						? "Adult Assessment Plan (Questions 94-98)"
						: "Child & Adolescent Assessment Plan (Questions 88-93)"}
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			{isAdultAssessment ? (
				<div className="space-y-8">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Clinical Impression <span className="text-red-500">*</span>
						</label>
						<div className="space-y-3">
							{[
								"Adult ASD",
								"Adult ADHD",
								"SLD (Specific Learning Disorder)",
								"IDD (Intellectual Developmental Disorder)",
								"Other",
							].map((opt) => (
								<label key={opt} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="adultClinicalImpression"
										value={opt}
										checked={adultClinicalImpression === opt}
										onChange={(e) =>
											setFieldValue("adultClinicalImpression", e.target.value)
										}
										className="custom-radio"
									/>
									<span className="text-sm text-gray-700">{opt}</span>
								</label>
							))}
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Comorbidity Present
						</label>
						<div className="flex flex-wrap gap-6">
							{[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
								{ value: "suspected", label: "Suspected" },
							].map((opt) => (
								<label key={opt.value} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="adultComorbidityPresent"
										value={opt.value}
										checked={adultComorbidityPresent === opt.value}
										onChange={(e) =>
											setFieldValue("adultComorbidityPresent", e.target.value)
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
							Assessment Recommendation <span className="text-red-500">*</span>
						</label>
						<div className="space-y-3">
							{[
								"Comprehensive psychological assessment",
								"Neuropsychological assessment",
								"ADHD-specific assessment",
								"ASD-specific assessment",
								"No further assessment needed",
								"Other",
							].map((opt) => (
								<label key={opt} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="adultAssessmentRecommendation"
										value={opt}
										checked={adultAssessmentRecommendation === opt}
										onChange={(e) =>
											setFieldValue(
												"adultAssessmentRecommendation",
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
							Justification for Assessment
						</label>
						<textarea
							value={adultAssessmentJustification}
							onChange={(e) =>
								setFieldValue("adultAssessmentJustification", e.target.value)
							}
							rows={5}
							placeholder="Provide rationale for the recommended assessment..."
							className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
						/>
					</div>
				</div>
			) : (
			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Provisional Diagnosis <span className="text-red-500">*</span>
					</label>
					<div className="space-y-3 flex flex-col">
						{diagnosisOptions.map((opt) => (
							<label
								key={opt}
								className="inline-flex items-center gap-2"
							>
								<input
									type="checkbox"
									checked={provisionalDiagnosis.includes(opt)}
									onChange={() => toggleArrayField("provisionalDiagnosis", opt)}
									className="custom-checkbox"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Treatment Frequency Recommendations
					</p>
					<div className="overflow-hidden border-gray-200">
						<table className="min-w-full text-sm">
							<thead className="bg-gray-50">
								<tr>
									<th className="text-left font-medium text-gray-700 px-4 py-3">
										Treatment Type
									</th>
									<th className="text-left font-medium text-gray-700 px-4 py-3">
										Frequency
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{treatmentRows.map((row) => (
									<tr key={row}>
										<td className="px-4 py-3 text-gray-700">{row}</td>
										<td className="px-4 py-3">
											<div className="flex flex-wrap gap-4">
												{frequencyOptions.map((f) => (
													<label
														key={f}
														className="inline-flex items-center gap-2"
													>
														<input
															type="radio"
															name={`treatmentFrequency-${row}`}
															value={f}
															checked={
																treatmentFrequency?.[row] === f
															}
															onChange={(e) =>
																setFieldValue("treatmentFrequency", {
																	...treatmentFrequency,
																	[row]: e.target.value,
																})
															}
															className="custom-checkbox"
														/>
														<span className="text-sm text-gray-700">
															{f}
														</span>
													</label>
												))}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Parent Recommendations
					</p>
					<div className="space-y-3 flex flex-col">
						{parentRecommendationOptions.map((opt) => (
							<label
								key={opt}
								className="inline-flex items-center gap-2"
							>
								<input
									type="checkbox"
									checked={parentRecommendations.includes(opt)}
									onChange={() => toggleArrayField("parentRecommendations", opt)}
									className="custom-checkbox"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Assessment Recommendations
					</p>
					<div className="space-y-3 flex flex-col">
						{assessmentRecommendationOptions.map((opt) => (
							<label
								key={opt}
								className="inline-flex items-center gap-2"
							>
								<input
									type="checkbox"
									checked={assessmentRecommendations.includes(opt)}
									onChange={() =>
										toggleArrayField("assessmentRecommendations", opt)
									}
									className="custom-checkbox"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Follow-up Timeline
					</p>
					<div className="space-y-3 flex flex-col">
						{followupTimelineOptions.map((opt) => (
							<label
								key={opt}
								className="inline-flex items-center gap-2"
							>
								<input
									type="checkbox"
									checked={followupTimeline.includes(opt)}
									onChange={() => toggleArrayField("followupTimeline", opt)}
									className="custom-checkbox"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Referrals
					</p>
					<div className="space-y-3 flex flex-col">
						{referralOptions.map((opt) => (
							<label
								key={opt}
								className="inline-flex items-center gap-2"
							>
								<input
									type="checkbox"
									checked={referrals.includes(opt)}
									onChange={() => toggleArrayField("referrals", opt)}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>
			</div>
			)}
		</div>
	);
};

export default AssessmentTreatmentPlan;
