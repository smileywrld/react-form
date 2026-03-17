const personalInfoRows = [
	"Full name",
	"Age",
	"Birthday",
	"Home address",
	"Phone number",
	"Parents' names",
	"School name",
	"Grade level",
	"Teacher's name",
	"Best friend's name",
	"Favorite subject",
	"Emergency contacts",
];

const readingRows = [
	"Recognizes letters",
	"Sounds out words",
	"Reads simple words",
	"Reads sentences",
	"Comprehends reading",
	"Reads age-appropriate texts",
];

const writingRows = [
	"Holds pencil correctly",
	"Writes letters",
	"Writes name",
	"Copies words",
	"Writes simple words",
	"Forms sentences",
	"Writes paragraphs",
	"Uses punctuation",
	"Spells correctly",
	"Writes legibly",
];

const mathRows = [
	"Counts to 100",
	"Recognizes numbers",
	"Writes numbers",
	"Basic addition",
	"Basic subtraction",
	"Multiplication",
	"Division",
	"Tells time",
];

const abilityOptions = [
	{ value: "yes", label: "Yes" },
	{ value: "partially", label: "Partially" },
	{ value: "no", label: "No" },
];

const communicationOptions = [
	"Verbal speech",
	"Sign language",
	"Picture cards",
	"Communication device",
	"Writing",
	"Gestures",
	"Other",
];

const RadioTable = ({ title, leftHeader, rows, valueMap, onChange }) => (
	<div>
		<p className="text-sm font-medium text-gray-700 mb-3">{title}</p>
		<div className="overflow-hidden rounded-lg border border-gray-200">
			<table className="min-w-full text-sm">
				<thead className="bg-gray-50">
					<tr>
						<th className="text-left font-medium text-gray-700 px-4 py-3">
							{leftHeader}
						</th>
						<th className="text-left font-medium text-gray-700 px-4 py-3">
							Ability
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 bg-white">
					{rows.map((label) => (
						<tr key={label}>
							<td className="px-4 py-3 text-gray-700">{label}</td>
							<td className="px-4 py-3">
								<div className="flex flex-wrap gap-6">
									{abilityOptions.map((opt) => (
										<label
											key={opt.value}
											className="inline-flex items-center gap-2"
										>
											<input
												type="radio"
												name={`${title}-${label}`}
												value={opt.value}
												checked={valueMap?.[label] === opt.value}
												onChange={(e) => onChange(label, e.target.value)}
												className="h-4 w-4 accent-gray-800"
											/>
											<span className="text-sm text-gray-700">{opt.label}</span>
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
);

const SchoolReadiness = ({ formData, onFormDataChange }) => {
	const personalInfo = formData?.schoolReadinessPersonalInfo ?? {};
	const reading = formData?.schoolReadinessReading ?? {};
	const writing = formData?.schoolReadinessWriting ?? {};
	const math = formData?.schoolReadinessMath ?? {};
	const communicationMethods = formData?.communicationMethods ?? [];

	const setTableValue = (key, label, value) => {
		onFormDataChange?.((prev) => ({
			...prev,
			[key]: {
				...(prev[key] ?? {}),
				[label]: value,
			},
		}));
	};

	const toggleCommunication = (value) => {
		onFormDataChange?.((prev) => {
			const existing = prev.communicationMethods ?? [];
			const next = existing.includes(value)
				? existing.filter((v) => v !== value)
				: [...existing, value];
			return { ...prev, communicationMethods: next };
		});
	};

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					School Readiness Assessment
				</h2>
				<p className="text-gray-500 text-sm">
					Questions 51-55 (Child Cases)
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-8">
				<RadioTable
					title="Personal Information Recall"
					leftHeader="Information"
					rows={personalInfoRows}
					valueMap={personalInfo}
					onChange={(label, value) =>
						setTableValue("schoolReadinessPersonalInfo", label, value)
					}
				/>

				<RadioTable
					title="Reading Skills"
					leftHeader="Skill"
					rows={readingRows}
					valueMap={reading}
					onChange={(label, value) =>
						setTableValue("schoolReadinessReading", label, value)
					}
				/>

				<RadioTable
					title="Writing Skills"
					leftHeader="Skill"
					rows={writingRows}
					valueMap={writing}
					onChange={(label, value) =>
						setTableValue("schoolReadinessWriting", label, value)
					}
				/>

				<RadioTable
					title="Math Skills"
					leftHeader="Skill"
					rows={mathRows}
					valueMap={math}
					onChange={(label, value) =>
						setTableValue("schoolReadinessMath", label, value)
					}
				/>

				<div>
					<p className="text-sm font-medium text-gray-700 mb-3">
						Speech &amp; Communication Methods
					</p>
					<div className="space-y-3 flex flex-col">
						{communicationOptions.map((opt) => (
							<label key={opt} className="inline-flex items-center gap-2">
								<input
									type="checkbox"
									checked={communicationMethods.includes(opt)}
									onChange={() => toggleCommunication(opt)}
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

export default SchoolReadiness;
