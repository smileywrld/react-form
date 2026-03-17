const attitudeOptions = [
	"Cooperative",
	"Guarded",
	"Resistant",
	"Hostile",
	"Other",
];

const speechOptions = ["Normal", "Rapid", "Slow", "Pressured", "Hesitant", "Other"];

const affectOptions = ["Appropriate", "Blunted", "Flat", "Labile", "Constricted"];

const MentalStatusExamination = ({ formData, onFormDataChange }) => {
	const appearance = formData?.mseAppearance ?? "";
	const attitude = formData?.mseAttitude ?? "";
	const behavior = formData?.mseBehavior ?? "";
	const speech = formData?.mseSpeech ?? "";
	const mood = formData?.mseMood ?? "";
	const affect = formData?.mseAffect ?? "";
	const orientationTime = formData?.mseOrientationTime ?? "";
	const orientationPlace = formData?.mseOrientationPlace ?? "";
	const orientationPerson = formData?.mseOrientationPerson ?? "";
	const insight = formData?.mseInsight ?? "";

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Mental Status Examination
				</h2>
				<p className="text-gray-500 text-sm">
					Child &amp; Adolescent MSE (Questions 56-63)
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Appearance <span className="text-red-500">*</span>
					</label>
					<textarea
						value={appearance}
						onChange={(e) => onFormDataChange?.({ mseAppearance: e.target.value })}
						rows={4}
						placeholder="Describe client's general appearance, grooming, dress..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Attitude <span className="text-red-500">*</span>
					</label>
					<div className="flex flex-wrap gap-6">
						{attitudeOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="mseAttitude"
									value={opt}
									checked={attitude === opt}
									onChange={(e) => onFormDataChange?.({ mseAttitude: e.target.value })}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Behavior <span className="text-red-500">*</span>
					</label>
					<textarea
						value={behavior}
						onChange={(e) => onFormDataChange?.({ mseBehavior: e.target.value })}
						rows={4}
						placeholder="Describe observable behaviors, activity level, eye contact..."
						className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Speech <span className="text-red-500">*</span>
					</label>
					<div className="flex flex-wrap gap-6">
						{speechOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="mseSpeech"
									value={opt}
									checked={speech === opt}
									onChange={(e) => onFormDataChange?.({ mseSpeech: e.target.value })}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Mood <span className="text-red-500">*</span>
					</label>
					<input
						value={mood}
						onChange={(e) => onFormDataChange?.({ mseMood: e.target.value })}
						placeholder="e.g., Happy, Sad, Anxious, Irritable"
						className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Affect <span className="text-red-500">*</span>
					</label>
					<div className="flex flex-wrap gap-6">
						{affectOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="mseAffect"
									value={opt}
									checked={affect === opt}
									onChange={(e) => onFormDataChange?.({ mseAffect: e.target.value })}
									className="h-4 w-4 accent-gray-800"
								/>
								<span className="text-sm text-gray-700">{opt}</span>
							</label>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Orientation - Time <span className="text-red-500">*</span>
						</label>
						<div className="space-y-3">
							{["Oriented", "Disoriented"].map((opt) => (
								<label key={opt} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="mseOrientationTime"
										value={opt}
										checked={orientationTime === opt}
										onChange={(e) =>
											onFormDataChange?.({ mseOrientationTime: e.target.value })
										}
										className="h-4 w-4 accent-gray-800"
									/>
									<span className="text-sm text-gray-700">{opt}</span>
								</label>
							))}
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Orientation - Place <span className="text-red-500">*</span>
						</label>
						<div className="space-y-3">
							{["Oriented", "Disoriented"].map((opt) => (
								<label key={opt} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="mseOrientationPlace"
										value={opt}
										checked={orientationPlace === opt}
										onChange={(e) =>
											onFormDataChange?.({ mseOrientationPlace: e.target.value })
										}
										className="h-4 w-4 accent-gray-800"
									/>
									<span className="text-sm text-gray-700">{opt}</span>
								</label>
							))}
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-3">
							Orientation - Person <span className="text-red-500">*</span>
						</label>
						<div className="space-y-3">
							{["Oriented", "Disoriented"].map((opt) => (
								<label key={opt} className="inline-flex items-center gap-2">
									<input
										type="radio"
										name="mseOrientationPerson"
										value={opt}
										checked={orientationPerson === opt}
										onChange={(e) =>
											onFormDataChange?.({ mseOrientationPerson: e.target.value })
										}
										className="h-4 w-4 accent-gray-800"
									/>
									<span className="text-sm text-gray-700">{opt}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Insight <span className="text-red-500">*</span>
					</label>
					<div className="flex gap-6">
						{["Good", "Fair", "Poor"].map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="radio"
									name="mseInsight"
									value={opt}
									checked={insight === opt}
									onChange={(e) => onFormDataChange?.({ mseInsight: e.target.value })}
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

export default MentalStatusExamination;
