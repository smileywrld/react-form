const relationshipOptions = [
	"Single",
	"Married",
	"Divorced",
	"Widowed",
	"In a relationship",
];

const OccupationalMaritalHistory = ({ formData, onFormDataChange }) => {
	const workHistory = formData?.workHistory ?? "";
	const currentOccupation = formData?.currentOccupation ?? "";
	const relationshipStatus = formData?.relationshipStatus ?? "";
	const pastRelationships = formData?.pastRelationships ?? "";

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Occupational &amp; Marital History
				</h2>
				<p className="text-gray-500 text-sm">
					Questions 46-50 (Adult Cases)
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Work History
					</label>
					<textarea
						value={workHistory}
						onChange={(e) => onFormDataChange?.({ workHistory: e.target.value })}
						rows={4}
						placeholder="Employment history, job changes, work-related issues..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Current Occupation
					</label>
					<input
						value={currentOccupation}
						onChange={(e) =>
							onFormDataChange?.({ currentOccupation: e.target.value })
						}
						placeholder="Current job title or employment status"
						className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Relationship Status <span className="text-red-500">*</span>
					</label>
					<div className="flex flex-wrap gap-6">
						{relationshipOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="relationshipStatus"
									value={opt}
									checked={relationshipStatus === opt}
									onChange={(e) =>
										onFormDataChange?.({ relationshipStatus: e.target.value })
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Past Relationships
					</label>
					<textarea
						value={pastRelationships}
						onChange={(e) =>
							onFormDataChange?.({ pastRelationships: e.target.value })
						}
						rows={4}
						placeholder="Significant past relationships, patterns..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default OccupationalMaritalHistory;
