import { useFormikContext } from "formik";

const medicalConditionOptions = [
	"Asthma",
	"Allergies",
	"Diabetes",
	"Heart condition",
	"Seizures/Epilepsy",
	"Vision problems",
	"Hearing problems",
	"Speech problems",
	"None",
	"Other",
];

const MedicalAcademic = () => {
	const { values, setFieldValue } = useFormikContext();
	const selectedConditions = values.medicalConditions;
	const currentMedications = values.currentMedications;
	const hospitalizationHistory = values.hospitalizationHistory;
	const psychiatricConditions = values.psychiatricConditions;
	const psychiatricConditionsDetails = values.psychiatricConditionsDetails;
	const psychiatricHospitalization = values.psychiatricHospitalization;
	const previousInterventions = values.previousInterventions;
	const currentlyStudent = values.currentlyStudent;
	const hobbiesInterests = values.hobbiesInterests;
	const socialization = values.socialization;
	const numberOfFriends = values.numberOfFriends;

	const toggleCondition = (condition) => {
		const next = selectedConditions.includes(condition)
			? selectedConditions.filter((c) => c !== condition)
			: [...selectedConditions, condition];
		setFieldValue("medicalConditions", next);
	};

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Medical &amp; Academic History
				</h2>
				<p className="text-gray-500 text-sm">Questions 28-45</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Medical Conditions
					</p>
					<div className="space-y-3 flex flex-col">
						{medicalConditionOptions.map((c) => (
							<label key={c} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={selectedConditions.includes(c)}
									onChange={() => toggleCondition(c)}
									className="custom-checkbox"
								/>
								<span className="text-sm text-gray-700">{c}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Current Medications
					</label>
					<textarea
						value={currentMedications}
						onChange={(e) =>
							setFieldValue("currentMedications", e.target.value)
						}
						rows={4}
						placeholder="List all medications, dosages, purposes..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Hospitalization History
					</label>
					<div className="flex gap-6">
						{["yes", "no"].map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="hospitalizationHistory"
									value={opt}
									checked={hospitalizationHistory === opt}
									onChange={(e) =>
										setFieldValue("hospitalizationHistory", e.target.value)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">
									{opt === "yes" ? "Yes" : "No"}
								</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Psychiatric Conditions
					</label>
					<div className="flex flex-wrap gap-6">
						{[
							{ value: "yes", label: "Yes" },
							{ value: "no", label: "No" },
							{ value: "other", label: "Other" },
						].map((opt) => (
							<label key={opt.value} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="psychiatricConditions"
									value={opt.value}
									checked={psychiatricConditions === opt.value}
									onChange={(e) =>
										setFieldValue("psychiatricConditions", e.target.value)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt.label}</span>
							</label>
						))}
					</div>

					<textarea
						value={psychiatricConditionsDetails}
						onChange={(e) =>
							setFieldValue("psychiatricConditionsDetails", e.target.value)
						}
						rows={4}
						placeholder="Provide details..."
						className="mt-3 w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Psychiatric Hospitalization
					</label>
					<div className="flex gap-6">
						{["yes", "no"].map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="psychiatricHospitalization"
									value={opt}
									checked={psychiatricHospitalization === opt}
									onChange={(e) =>
										setFieldValue("psychiatricHospitalization", e.target.value)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">
									{opt === "yes" ? "Yes" : "No"}
								</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Previous Interventions
					</label>
					<textarea
						value={previousInterventions}
						onChange={(e) =>
							setFieldValue("previousInterventions", e.target.value)
						}
						rows={4}
						placeholder="Previous therapy, counseling, or interventions..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Currently a Student?
					</label>
					<div className="flex flex-wrap gap-6">
						{[
							{ value: "yes", label: "Yes" },
							{ value: "no", label: "No" },
							{ value: "na", label: "N/A" },
						].map((opt) => (
							<label key={opt.value} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="currentlyStudent"
									value={opt.value}
									checked={currentlyStudent === opt.value}
									onChange={(e) =>
										setFieldValue("currentlyStudent", e.target.value)
									}
									className="custom-radio"
								/>
								<span className="text-sm text-gray-700">{opt.label}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Hobbies &amp; Interests
					</label>
					<input
						value={hobbiesInterests}
						onChange={(e) =>
							setFieldValue("hobbiesInterests", e.target.value)
						}
						placeholder="What does the client enjoy doing?"
						className="w-full rounded-lg border border-[#DADEE3] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Socialization
					</label>
					<textarea
						value={socialization}
						onChange={(e) => setFieldValue("socialization", e.target.value)}
						rows={4}
						placeholder="Describe social interactions, friendships, group activities..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Number of Friends
					</label>
					<input
						value={numberOfFriends}
						onChange={(e) =>
							setFieldValue("numberOfFriends", e.target.value)
						}
						placeholder="Approximate number"
						className="w-full rounded-lg border border-[#DADEE3] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default MedicalAcademic;
