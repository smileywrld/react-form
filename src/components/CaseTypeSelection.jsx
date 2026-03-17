import React from "react";

const CaseTypeSelection = ({
	formData,
	onFormDataChange,
}) => {
	const selectedCase = formData.caseType || "";

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
		if (typeof onFormDataChange === "function") {
			onFormDataChange({ caseType: caseValue });
		}
	};

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
			{/* Header with case info */}
			<div className="mb-6 pb-4 border-b border-gray-200">
				<h1 className="text-2xl font-bold text-gray-900">
					Clinical Psychologist Intake Form
				</h1>
				<div className="flex gap-6 mt-2 text-sm text-gray-600">
					<p>
						<span className="font-medium">Case:</span>{" "}
						{formData.caseID || "CASE-081555"}
					</p>
					<p>
						<span className="font-medium">PIC:</span>{" "}
						{formData.picName || "Not Set"}
					</p>
					<p>
						<span className="font-medium">Date:</span>{" "}
						{new Date().toLocaleDateString("en-US", {
							month: "2-digit",
							day: "2-digit",
							year: "numeric",
						})}
					</p>
				</div>
			</div>

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

			{/* Important Notice */}
			<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
				<div className="flex">
					<div className="shrink-0">
						<svg
							className="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="ml-3">
						<p className="text-sm text-yellow-700">
							<span className="font-medium">Important:</span> This
							selection determines the entire form flow. Sections and
							questions will adapt based on your choice.
						</p>
					</div>
				</div>
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
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
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
