import { FaFileAlt } from "react-icons/fa";
import { FiInfo, FiList } from "react-icons/fi";

const formatDate = (value) => {
	if (!value) return new Date().toLocaleDateString("en-US");
	const parsed = new Date(value);
	if (!Number.isNaN(parsed.getTime())) return parsed.toLocaleDateString("en-US");
	return String(value);
};

const formatTime = (value) => {
	if (!value) return null;
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return null;
	return parsed.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	});
};

const CASE_TYPE_LABELS = {
	"child-assessment": "Assessment (Child & Adolescent)",
	"adult-assessment": "Assessment (Adult)",
	"child-intervention": "Intervention (Child & Adolescent)",
	"adult-intervention": "Intervention (Adult)",
};

const Overview = ({ formData, lastSavedAt }) => {
	const caseId = formData?.caseID?.trim() || "CASE-081555";
	const picName = formData?.picName?.trim();
	const picAge = String(formData?.picAge ?? "").trim();
	const picDisplay =
		picName && picAge ? `${picName}, ${picAge}` : picName || picAge || "Not Set";
	const dateDisplay = formatDate(formData?.consultationDate);
	const caseTypeLabel =
		CASE_TYPE_LABELS[formData?.caseType] ?? "Not Set";
	const timeDisplay = formatTime(lastSavedAt);

	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<div className="flex items-start justify-between">
				<div className="flex items-center gap-3">
					<FaFileAlt className="text-indigo-600 text-2xl" />
					<h1 className="text-base font-semibold text-gray-900">
						Clinical Psychologist Intake Form
					</h1>
				</div>
				<div className="text-right">
					<p className="text-xs text-gray-500">Auto-saved</p>
					<p className="text-xs text-gray-500">{timeDisplay ?? "--:--:--"}</p>
				</div>
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

			<div className="mt-5 bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-3 flex items-center justify-between">
				<div className="flex items-center gap-2 text-sm text-indigo-900">
					<FiInfo className="text-indigo-600" />
					<p>
						<span className="font-semibold">Case Type:</span>{" "}
						<span className="font-medium">{caseTypeLabel}</span>
					</p>
				</div>
				<button
					type="button"
					className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
				>
					<FiList />
					Sections
				</button>
			</div>
		</div>
	);
};

export default Overview;
