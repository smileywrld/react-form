import { useFormikContext } from "formik";

const CaseSpecificConcerns = () => {
	const { values, setFieldValue } = useFormikContext();
	const isAdult =
		values.caseType === "adult-assessment" || values.caseType === "adult-intervention";
	const primaryConcerns = isAdult ? values.clientConcerns : values.parentsConcerns;
	const presentingProblems = values.presentingProblems;
	const backgroundOfProblems = values.backgroundOfProblems;
	const actionsTakenPreviously = values.actionsTakenPreviously;
	const familyBackground = values.familyBackground;
	const siblingsAcademicPerformance = values.siblingsAcademicPerformance;

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Case-Specific Concerns
				</h2>
				<p className="text-gray-500 text-sm">Questions 12-20</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						{isAdult ? "Client's Concerns" : "Parent's Concerns"}{" "}
						<span className="text-red-500">*</span>
					</label>
					<textarea
						value={primaryConcerns}
						onChange={(e) =>
							setFieldValue(
								isAdult ? "clientConcerns" : "parentsConcerns",
								e.target.value,
							)
						}
						rows={4}
						maxLength={1000}
						placeholder={
							isAdult
								? "What are the client's main concerns?"
								: "What are the parent's main concerns?"
						}
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
					<p className="text-xs text-gray-400 text-right mt-1">
						{primaryConcerns.length} / 1000
					</p>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Presenting Problems <span className="text-red-500">*</span>
					</label>
					<textarea
						value={presentingProblems}
						onChange={(e) =>
							setFieldValue("presentingProblems", e.target.value)
						}
						rows={5}
						maxLength={2000}
						placeholder="Describe the presenting problems in detail..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
					<p className="text-xs text-gray-400 text-right mt-1">
						{presentingProblems.length} / 2000
					</p>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Background of Problems
					</label>
					<textarea
						value={backgroundOfProblems}
						onChange={(e) =>
							setFieldValue("backgroundOfProblems", e.target.value)
						}
						rows={5}
						maxLength={2000}
						placeholder="When and how did the problems start..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
					<p className="text-xs text-gray-400 text-right mt-1">
						{backgroundOfProblems.length} / 2000
					</p>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Actions Taken Previously
					</label>
					<textarea
						value={actionsTakenPreviously}
						onChange={(e) =>
							setFieldValue("actionsTakenPreviously", e.target.value)
						}
						rows={4}
						placeholder="What has been done to address these concerns..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Family Background
					</label>
					<textarea
						value={familyBackground}
						onChange={(e) =>
							setFieldValue("familyBackground", e.target.value)
						}
						rows={4}
						placeholder="Family structure, dynamics, relevant background..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				{!isAdult && (
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Siblings Academic Performance
						</label>
						<input
							value={siblingsAcademicPerformance}
							onChange={(e) =>
								setFieldValue("siblingsAcademicPerformance", e.target.value)
							}
							placeholder="Describe siblings' performance if applicable"
							className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default CaseSpecificConcerns;
