const CaseSpecificConcerns = ({ formData, onFormDataChange }) => {
	const parentsConcerns = formData?.parentsConcerns ?? "";
	const presentingProblems = formData?.presentingProblems ?? "";
	const backgroundOfProblems = formData?.backgroundOfProblems ?? "";
	const actionsTakenPreviously = formData?.actionsTakenPreviously ?? "";
	const familyBackground = formData?.familyBackground ?? "";
	const siblingsAcademicPerformance = formData?.siblingsAcademicPerformance ?? "";

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
						Parent&apos;s Concerns <span className="text-red-500">*</span>
					</label>
					<textarea
						value={parentsConcerns}
						onChange={(e) =>
							onFormDataChange?.({ parentsConcerns: e.target.value })
						}
						rows={4}
						maxLength={1000}
						placeholder="What are the parent's main concerns?"
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
					<p className="text-xs text-gray-400 text-right mt-1">
						{parentsConcerns.length} / 1000
					</p>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Presenting Problems <span className="text-red-500">*</span>
					</label>
					<textarea
						value={presentingProblems}
						onChange={(e) =>
							onFormDataChange?.({ presentingProblems: e.target.value })
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
							onFormDataChange?.({ backgroundOfProblems: e.target.value })
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
							onFormDataChange?.({ actionsTakenPreviously: e.target.value })
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
							onFormDataChange?.({ familyBackground: e.target.value })
						}
						rows={4}
						placeholder="Family structure, dynamics, relevant background..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Siblings Academic Performance
					</label>
					<input
						value={siblingsAcademicPerformance}
						onChange={(e) =>
							onFormDataChange?.({ siblingsAcademicPerformance: e.target.value })
						}
						placeholder="Describe siblings' performance if applicable"
						className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default CaseSpecificConcerns;
