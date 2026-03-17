import React from "react";
import ProgressBar from "./ProgressBar";

const Header = ({ steps, currentStepIndex, onStepChange, children }) => {
	const totalSteps = steps.length;
	const currentStepNumber = currentStepIndex + 1;
	const sectionLabel = `Section ${currentStepNumber} of ${totalSteps}`;
	const stepTitle = steps[currentStepIndex]?.label ?? "";
	const percentComplete = totalSteps
		? `${Math.round((currentStepNumber / totalSteps) * 100)}% Complete`
		: "0% Complete";

	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<ProgressBar
				currentStep={currentStepNumber}
				totalSteps={totalSteps}
				stepLabels={steps.map((s) => s.label)}
			/>
			<p className="text-gray-500">{sectionLabel}</p>
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-800">{stepTitle}</h2>
				<p className="text-gray-500">{percentComplete}</p>
			</div>

			<div className="flex gap-3 mt-4 overflow-x-auto whitespace-nowrap pb-2">
				{steps.map((step, index) => {
					const isActive = index === currentStepIndex;
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
							className={`btn border p-1 rounded-md ${
								isActive
									? "bg-[#E0E7FF] border-[#A3B3FF] text-[#432DD7]"
									: "bg-[#F3F4F6] text-[#4A5565]"
							} ${isClickable ? "" : "opacity-60 cursor-not-allowed"}`}
						>
							{step.label}
						</button>
					);
				})}
			</div>

			{children}
		</div>
	);
};

export default Header;
