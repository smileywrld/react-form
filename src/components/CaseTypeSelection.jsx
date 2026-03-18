import { useFormikContext } from "formik";

const CaseTypeSelection = () => {
	const { values, setFieldValue } = useFormikContext();
	const selectedCase = values.caseType || "";

	const caseTypes = [
		{
			id: "child-assessment",
			label: "Assessment (Child & Adolescent)",
			description: "For clients under 18 years old requiring assessment",
			value: "child-assessment",
		},
		{
			id: "adult-assessment",
			label: "Assessment (Adult)",
			description: "For clients 18 years and older requiring assessment",
			value: "adult-assessment",
		},
		{
			id: "child-intervention",
			label: "Intervention (Child & Adolescent)",
			description:
				"For clients under 18 years old requiring intervention/therapy",
			value: "child-intervention",
		},
		{
			id: "adult-intervention",
			label: "Intervention (Adult)",
			description:
				"For clients 18 years and older requiring intervention/therapy",
			value: "adult-intervention",
		},
	];

	const handleCaseSelect = (caseValue) => {
		setFieldValue("caseType", caseValue);
	};

	return (
		<div>
			{/* Section Title */}
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">
					Case Type Selection
				</h2>
				<p className="text-gray-500">
					Question 11 - Critical Branching Point
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			{/* Case Type Selection */}
			<div className="mb-8">
				<label className="block text-sm font-medium text-gray-700 mb-4">
					Please select case type <span className="text-red-600">*</span>
				</label>

				<div className="space-y-4">
					{caseTypes.map((caseType) => (
						<div
							key={caseType.id}
							className={`relative p-4 border rounded-lg cursor-pointer transition-all ${
								selectedCase === caseType.value
									? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
									: "border-gray-300 hover:border-indigo-300 hover:bg-gray-50"
							}`}
							onClick={() => handleCaseSelect(caseType.value)}
						>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										type="radio"
										name="caseType"
										id={caseType.id}
										value={caseType.value}
										checked={selectedCase === caseType.value}
										onChange={(e) => handleCaseSelect(e.target.value)}
										className="custom-radio"
									/>
								</div>
								<div className="ml-3">
									<label
										htmlFor={caseType.id}
										className="font-medium text-gray-700 cursor-pointer"
									>
										{caseType.label}
									</label>
									<p className="text-sm text-gray-500 mt-1">
										{caseType.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CaseTypeSelection;
