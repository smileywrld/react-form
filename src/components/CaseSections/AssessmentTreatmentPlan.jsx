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

const AssessmentTreatmentPlan = ({ formData, onFormDataChange }) => {
	const provisionalDiagnosis = formData?.provisionalDiagnosis ?? [];
	const treatmentFrequency = formData?.treatmentFrequency ?? {};
	const parentRecommendations = formData?.parentRecommendations ?? [];
	const assessmentRecommendations = formData?.assessmentRecommendations ?? [];
	const followupTimeline = formData?.followupTimeline ?? [];
	const referrals = formData?.referrals ?? [];

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Assessment &amp; Treatment Plan
				</h2>
				<p className="text-gray-500 text-sm">
					Child &amp; Adolescent Assessment Plan (Questions 88-93)
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Provisional Diagnosis <span className="text-red-500">*</span>
					</label>
					<div className="space-y-3 flex flex-col">
						{diagnosisOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={provisionalDiagnosis.includes(opt)}
									onChange={() =>
										onFormDataChange?.((prev) => ({
											...prev,
											provisionalDiagnosis: toggleFromArray(
												prev.provisionalDiagnosis ?? [],
												opt,
											),
										}))
									}
									className="h-4 w-4 accent-gray-800"
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
					<div className="overflow-hidden rounded-lg border border-gray-200">
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
													<label key={f} className="inline-flex items-center gap-2">
														<input
															type="radio"
															name={`treatmentFrequency-${row}`}
															value={f}
															checked={treatmentFrequency?.[row] === f}
															onChange={(e) =>
																onFormDataChange?.((prev) => ({
																	...prev,
																	treatmentFrequency: {
																		...(prev.treatmentFrequency ?? {}),
																		[row]: e.target.value,
																	},
																}))
															}
															className="h-4 w-4 accent-gray-800"
														/>
														<span className="text-sm text-gray-700">{f}</span>
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
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={parentRecommendations.includes(opt)}
									onChange={() =>
										onFormDataChange?.((prev) => ({
											...prev,
											parentRecommendations: toggleFromArray(
												prev.parentRecommendations ?? [],
												opt,
											),
										}))
									}
									className="h-4 w-4 accent-gray-800"
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
					<div className="space-y-3">
						{assessmentRecommendationOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={assessmentRecommendations.includes(opt)}
									onChange={() =>
										onFormDataChange?.((prev) => ({
											...prev,
											assessmentRecommendations: toggleFromArray(
												prev.assessmentRecommendations ?? [],
												opt,
											),
										}))
									}
									className="h-4 w-4 accent-gray-800"
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
					<div className="space-y-3">
						{followupTimelineOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={followupTimeline.includes(opt)}
									onChange={() =>
										onFormDataChange?.((prev) => ({
											...prev,
											followupTimeline: toggleFromArray(
												prev.followupTimeline ?? [],
												opt,
											),
										}))
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">Referrals</p>
					<div className="space-y-3">
						{referralOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={referrals.includes(opt)}
									onChange={() =>
										onFormDataChange?.((prev) => ({
											...prev,
											referrals: toggleFromArray(prev.referrals ?? [], opt),
										}))
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssessmentTreatmentPlan;
