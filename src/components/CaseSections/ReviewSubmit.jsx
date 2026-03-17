const CASE_TYPE_LABELS = {
	"child-assessment": "Assessment (Child & Adolescent)",
	"adult-assessment": "Assessment (Adult)",
	"child-intervention": "Intervention (Child & Adolescent)",
	"adult-intervention": "Intervention (Adult)",
};

const ReviewSubmit = ({ formData }) => {
	const caseId = formData?.caseID?.trim() || "CASE-081555";
	const clientName = formData?.fullName?.trim() || "Not provided";
	const age = String(formData?.age ?? "").trim() || "Not provided";
	const assignedTo = formData?.assignedPsychologist?.trim() || "Not assigned";
	const caseType = CASE_TYPE_LABELS[formData?.caseType] ?? "Not provided";
	const consultationDate =
		formData?.consultationDate?.trim() ||
		new Date().toISOString().slice(0, 10);

	return (
		<div>
			<div className="my-5">
				<h2 className="text-lg font-semibold text-gray-800">Review &amp; Submit</h2>
				<p className="text-gray-500 text-sm">
					Please review your information before submitting
				</p>
				<hr className="border-[#F3F4F6] mt-3" />
			</div>

			<div className="space-y-6">
				<div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
					<h3 className="text-base font-semibold text-gray-900 mb-6">
						Form Summary
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
						<div className="space-y-4">
							<p className="text-gray-600">
								Case ID: <span className="font-semibold text-gray-900">{caseId}</span>
							</p>
							<p className="text-gray-600">
								Age: <span className="font-semibold text-gray-900">{age}</span>
							</p>
							<p className="text-gray-600">
								Assigned to:{" "}
								<span className="font-semibold text-gray-900">{assignedTo}</span>
							</p>
						</div>
						<div className="space-y-4">
							<p className="text-gray-600">
								Client Name:{" "}
								<span className="font-semibold text-gray-900">{clientName}</span>
							</p>
							<p className="text-gray-600">
								Case Type:{" "}
								<span className="font-semibold text-gray-900">{caseType}</span>
							</p>
							<p className="text-gray-600">
								Consultation Date:{" "}
								<span className="font-semibold text-gray-900">
									{consultationDate}
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className="bg-green-50 border border-green-200 rounded-lg p-5">
					<p className="text-sm text-green-800">
						<span className="font-semibold">Section Completion:</span> 8 of 8
						sections completed
					</p>
				</div>

				<p className="text-sm text-gray-600">
					By submitting this form, you confirm that all information provided is
					accurate and complete to the best of your knowledge.
				</p>
			</div>
		</div>
	);
};

export default ReviewSubmit;
