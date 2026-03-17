const birthTermOptions = [
	{ value: "early", label: "Early" },
	{ value: "full-term", label: "Full term" },
	{ value: "late", label: "Late" },
	{ value: "post-term", label: "Post-term" },
];

const deliveryModeOptions = [
	{ value: "vaginal", label: " Vaginal" },
	{ value: "assisted-delivery", label: " Assisted delivery" },
	{ value: "c-section", label: " C-section" },
	{ value: "emergency-c-section", label: " Emergency C-section" },
];

const milestoneRows = [
	{ key: "rolledOver", label: "Rolled over" },
	{ key: "satWithoutSupport", label: "Sat without support" },
	{ key: "crawled", label: "Crawled" },
	{ key: "walkedIndependently", label: "Walked independently" },
	{ key: "firstWords", label: "First words" },
	{ key: "spokeInSentences", label: "Spoke in sentences" },
	{ key: "toiletTrained", label: "Toilet trained" },
	{ key: "fedSelf", label: "Fed self" },
	{ key: "dressedSelf", label: "Dressed self" },
];

const milestoneOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "no", label: "No" },
	{ value: "not-sure", label: "Not Sure" },
];

const DevelopmentalFamilyHistory = ({ formData, onFormDataChange }) => {
	const birthTerm = formData?.birthTerm ?? "";
	const deliveryMode = formData?.deliveryMode ?? "";
	const milestones = formData?.developmentalMilestones ?? {};
	const familyGenogram = formData?.familyGenogram ?? "";
	const familyHealthIssues = formData?.familyHealthIssues ?? "";

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Developmental &amp; Family History
				</h2>
				<p className="text-gray-500 text-sm">Questions 21-27</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Birth Term <span className="text-red-500">*</span>
					</label>
					<div className="flex flex-wrap gap-6">
						{birthTermOptions.map((opt) => (
							<label
								key={opt.value}
								className="inline-flex items-center gap-2"
							>
								<input
									type="radio"
									name="birthTerm"
									value={opt.value}
									checked={birthTerm === opt.value}
									onChange={(e) =>
										onFormDataChange?.({ birthTerm: e.target.value })
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">
									{opt.label}
								</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Delivery Mode <span className="text-red-500">*</span>
					</label>
					<div className="space-y-3">
						{deliveryModeOptions.map((opt) => (
							<label
								key={opt.value}
								className="inline-flex items-center gap-2"
							>
								<input
									type="radio"
									name="deliveryMode"
									value={opt.value}
									checked={deliveryMode === opt.value}
									onChange={(e) =>
										onFormDataChange?.({
											deliveryMode: e.target.value,
										})
									}
									className="h-4 w-4 accent-gray-800 px-2"
								/>
								<span className="text-sm text-gray-700">
									{" "}
									{opt.label}{" "}
								</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Developmental Difficulties
					</p>

					<div className="overflow-hidden border-gray-200">
						<table className="min-w-full text-sm">
							<thead className="bg-gray-50">
								<tr>
									<th className="text-left font-medium text-gray-700 px-4 py-3">
										Milestone
									</th>
									<th className="text-left font-medium text-gray-700 px-4 py-3">
										Response
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{milestoneRows.map((row) => (
									<tr key={row.key}>
										<td className="px-4 py-3 text-gray-700">
											{row.label}
										</td>
										<td className="px-4 py-3">
											<div className="flex flex-wrap gap-6">
												{milestoneOptions.map((opt) => (
													<label
														key={opt.value}
														className="inline-flex items-center gap-2"
													>
														<input
															type="radio"
															name={`milestone-${row.key}`}
															value={opt.value}
															checked={
																milestones?.[row.key] ===
																opt.value
															}
															onChange={(e) =>
																onFormDataChange?.((prev) => ({
																	...prev,
																	developmentalMilestones: {
																		...(prev.developmentalMilestones ??
																			{}),
																		[row.key]: e.target.value,
																	},
																}))
															}
															className="h-4 w-4 accent-gray-800"
														/>
														<span className="text-sm text-gray-700">
															{opt.label}
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
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Family Genogram / Family Tree
					</label>
					<textarea
						value={familyGenogram}
						onChange={(e) =>
							onFormDataChange?.({ familyGenogram: e.target.value })
						}
						rows={4}
						placeholder="Describe family structure, relationships, significant family members..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Family Health Issues
					</label>
					<div className="flex flex-wrap gap-6">
						{[
							{ value: "yes", label: "Yes" },
							{ value: "no", label: "No" },
							{ value: "not-sure", label: "Not Sure" },
						].map((opt) => (
							<label
								key={opt.value}
								className="inline-flex items-center gap-2"
							>
								<input
									type="radio"
									name="familyHealthIssues"
									value={opt.value}
									checked={familyHealthIssues === opt.value}
									onChange={(e) =>
										onFormDataChange?.({
											familyHealthIssues: e.target.value,
										})
									}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">
									{opt.label}
								</span>
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevelopmentalFamilyHistory;
