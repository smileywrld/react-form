import { useFormikContext } from "formik";

const relationshipOptions = [
	"Single",
	"Married",
	"Divorced",
	"Widowed",
	"In a relationship",
];

const OccupationalMaritalHistory = () => {
	const { values, setFieldValue } = useFormikContext();
	const workHistory = values.workHistory;
	const currentOccupation = values.currentOccupation;
	const relationshipStatus = values.relationshipStatus;
	const pastRelationships = values.pastRelationships;

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
						onChange={(e) => setFieldValue("workHistory", e.target.value)}
						rows={4}
						placeholder="Employment history, job changes, work-related issues..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Current Occupation
					</label>
					<input
						value={currentOccupation}
						onChange={(e) =>
							setFieldValue("currentOccupation", e.target.value)
						}
						placeholder="Current job title or employment status"
						className="w-full rounded-lg border border-[#DADEE3] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
										setFieldValue("relationshipStatus", e.target.value)
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
						Past Relationships
					</label>
					<textarea
						value={pastRelationships}
						onChange={(e) =>
							setFieldValue("pastRelationships", e.target.value)
						}
						rows={4}
						placeholder="Significant past relationships, patterns..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default OccupationalMaritalHistory;
