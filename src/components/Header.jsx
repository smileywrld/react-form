import React from "react";
import ProgressBar from "./ProgressBar";
import { FiCheck } from "react-icons/fi";

const Header = ({ steps, currentStepIndex, onStepChange }) => {
	const totalSteps = steps.length;
	const currentStepNumber = currentStepIndex + 1;
	const sectionLabel = `Section ${currentStepNumber} of ${totalSteps}`;
	const stepTitle = steps[currentStepIndex]?.label ?? "";
	const percentComplete = totalSteps
		? `${Math.round((currentStepNumber / totalSteps) * 100)}% Complete`
		: "0% Complete";

	return (
		<div>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-500">{sectionLabel}</p>
					<h2 className="text-base text-gray-900 mt-1">
						{stepTitle}
					</h2>
				</div>
				<p className="text-sm text-gray-500 sm:text-right">{percentComplete}</p>
			</div>

			<div className="mt-4">
				<ProgressBar currentStep={currentStepNumber} totalSteps={totalSteps} showLabels={false} />
			</div>

			<div className="mt-4 flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
				{steps.map((step, index) => {
					const isActive = index === currentStepIndex;
					const isCompleted = index < currentStepIndex;
					const isClickable = index <= currentStepIndex;

					return (
						<button
							key={step.id}
							type="button"
							onClick={() => {
								if (!isClickable) return;
								if (typeof onStepChange === "function") onStepChange(index);
							}}
							disabled={!isClickable}
							className={`inline-flex shrink-0 items-center gap-2 rounded-md border px-3 py-1.5 text-xs sm:text-sm ${
								isCompleted
									? "bg-green-100 border-green-200 text-green-700"
									: isActive
										? "bg-indigo-50 border-indigo-200 text-indigo-700"
										: "bg-gray-100 border-gray-200 text-gray-600"
							} ${isClickable ? "" : "opacity-60 cursor-not-allowed"}`}
						>
							{isCompleted && <FiCheck className="shrink-0" />}
							{step.label}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
