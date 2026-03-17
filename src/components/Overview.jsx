import { FaFileAlt } from "react-icons/fa";

const formatDate = (value) => {
	if (!value) return new Date().toLocaleDateString("en-US");
	const parsed = new Date(value);
	if (!Number.isNaN(parsed.getTime())) return parsed.toLocaleDateString("en-US");
	return String(value);
};

const Overview = ({ formData }) => {
	const caseId = formData?.caseID?.trim() || "CASE-081555";
	const picName = formData?.picName?.trim();
	const picAge = String(formData?.picAge ?? "").trim();
	const picDisplay =
		picName && picAge ? `${picName}, ${picAge}` : picName || picAge || "Not Set";
	const dateDisplay = formatDate(formData?.consultationDate);

	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<div className="flex items-center gap-3">
				<FaFileAlt className="text-indigo-600 text-2xl" />
				<h1 className="text-base font-semibold text-gray-900">
					Clinical Psychologist Intake Form
				</h1>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm text-gray-600">
				<p>
					<span className="text-gray-500">Case:</span>{" "}
					<span className="font-medium text-gray-700">{caseId}</span>
				</p>
				<p className="sm:text-center">
					<span className="text-gray-500">PIC:</span>{" "}
					<span className="font-medium text-gray-700">{picDisplay}</span>
				</p>
				<p className="sm:text-right">
					<span className="text-gray-500">Date:</span>{" "}
					<span className="font-medium text-gray-700">{dateDisplay}</span>
				</p>
			</div>
		</div>
	);
};

export default Overview;
