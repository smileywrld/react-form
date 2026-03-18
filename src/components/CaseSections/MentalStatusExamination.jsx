import { useFormikContext } from "formik";

const attitudeOptions = [
	"Cooperative",
	"Guarded",
	"Resistant",
	"Hostile",
	"Other",
];

const speechOptions = ["Normal", "Rapid", "Slow", "Pressured", "Hesitant", "Other"];

const affectOptions = ["Appropriate", "Blunted", "Flat", "Labile", "Constricted"];

const MentalStatusExamination = () => {
	const { values, setFieldValue } = useFormikContext();
	const appearance = values.mseAppearance;
	const attitude = values.mseAttitude;
	const behavior = values.mseBehavior;
	const speech = values.mseSpeech;
	const mood = values.mseMood;
	const affect = values.mseAffect;
	const orientationTime = values.mseOrientationTime;
	const orientationPlace = values.mseOrientationPlace;
	const orientationPerson = values.mseOrientationPerson;
	const insight = values.mseInsight;

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
						onChange={(e) => setFieldValue("mseAppearance", e.target.value)}
						rows={4}
						placeholder="Describe client's general appearance, grooming, dress..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
									onChange={(e) => setFieldValue("mseAttitude", e.target.value)}
									className="custom-radio"
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
						onChange={(e) => setFieldValue("mseBehavior", e.target.value)}
						rows={4}
						placeholder="Describe observable behaviors, activity level, eye contact..."
						className="w-full rounded-lg border border-[#DADEE3] p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
									onChange={(e) => setFieldValue("mseSpeech", e.target.value)}
									className="custom-radio"
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
						onChange={(e) => setFieldValue("mseMood", e.target.value)}
						placeholder="e.g., Happy, Sad, Anxious, Irritable"
						className="w-full rounded-lg border border-[#DADEE3] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
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
									onChange={(e) => setFieldValue("mseAffect", e.target.value)}
									className="custom-radio"
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
											setFieldValue("mseOrientationTime", e.target.value)
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
											setFieldValue("mseOrientationPlace", e.target.value)
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
											setFieldValue("mseOrientationPerson", e.target.value)
										}
										className="custom-radio"
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
								onChange={(e) => setFieldValue("mseInsight", e.target.value)}
								className="custom-radio"
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
