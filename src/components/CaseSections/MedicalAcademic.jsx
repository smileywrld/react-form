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

const MedicalAcademic = ({ formData, onFormDataChange }) => {
	const selectedConditions = formData?.medicalConditions ?? [];
	const currentMedications = formData?.currentMedications ?? "";
	const hospitalizationHistory = formData?.hospitalizationHistory ?? "";
	const psychiatricConditions = formData?.psychiatricConditions ?? "";
	const psychiatricConditionsDetails = formData?.psychiatricConditionsDetails ?? "";
	const psychiatricHospitalization = formData?.psychiatricHospitalization ?? "";
	const previousInterventions = formData?.previousInterventions ?? "";
	const currentlyStudent = formData?.currentlyStudent ?? "";
	const hobbiesInterests = formData?.hobbiesInterests ?? "";
	const socialization = formData?.socialization ?? "";
	const numberOfFriends = formData?.numberOfFriends ?? "";

	const toggleCondition = (condition) => {
		onFormDataChange?.((prev) => {
			const existing = prev.medicalConditions ?? [];
			const next = existing.includes(condition)
				? existing.filter((c) => c !== condition)
				: [...existing, condition];
			return { ...prev, medicalConditions: next };
		});
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
									className="h-4 w-4 accent-gray-800"
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
							onFormDataChange?.({ currentMedications: e.target.value })
						}
						rows={4}
						placeholder="List all medications, dosages, purposes..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
										onFormDataChange?.({ hospitalizationHistory: e.target.value })
									}
									className="h-4 w-4 accent-gray-800"
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
										onFormDataChange?.({ psychiatricConditions: e.target.value })
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt.label}</span>
							</label>
						))}
					</div>

					<textarea
						value={psychiatricConditionsDetails}
						onChange={(e) =>
							onFormDataChange?.({ psychiatricConditionsDetails: e.target.value })
						}
						rows={4}
						placeholder="Provide details..."
						className="w-full mt-3 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
										onFormDataChange?.({
											psychiatricHospitalization: e.target.value,
										})
									}
									className="h-4 w-4 accent-gray-800"
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
							onFormDataChange?.({ previousInterventions: e.target.value })
						}
						rows={4}
						placeholder="Previous therapy, counseling, or interventions..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
										onFormDataChange?.({ currentlyStudent: e.target.value })
									}
									className="h-4 w-4 accent-gray-800"
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
							onFormDataChange?.({ hobbiesInterests: e.target.value })
						}
						placeholder="What does the client enjoy doing?"
						className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Socialization
					</label>
					<textarea
						value={socialization}
						onChange={(e) => onFormDataChange?.({ socialization: e.target.value })}
						rows={4}
						placeholder="Describe social interactions, friendships, group activities..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Number of Friends
					</label>
					<input
						value={numberOfFriends}
						onChange={(e) =>
							onFormDataChange?.({ numberOfFriends: e.target.value })
						}
						placeholder="Approximate number"
						className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default MedicalAcademic;
