const ProgressBar = ({
	currentStep,
	totalSteps = 2,
	stepLabels,
	showLabels = true,
}) => {
	const safeTotalSteps = Math.max(1, totalSteps);
	const safeCurrentStep = Math.min(Math.max(1, currentStep), safeTotalSteps);
	const progress = (safeCurrentStep / safeTotalSteps) * 100;

	const firstLabel = stepLabels?.[0];
	const lastLabel = stepLabels?.[safeTotalSteps - 1];

	return (
		<div className="w-full">
			{showLabels && (
				<div className="flex justify-between mb-2">
					<span className="text-sm font-medium text-indigo-600">
						Section {safeCurrentStep} of {safeTotalSteps}
					</span>
					<span className="text-sm font-medium text-gray-600">
						{Math.round(progress)}% Complete
					</span>
				</div>
			)}
			<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
				<div
					className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
					style={{ width: `${progress}%` }}
				/>
			</div>
			{showLabels && (firstLabel || lastLabel) && (
				<div className="flex justify-between mt-2 gap-4">
					<span
						className={`text-xs truncate ${
							safeCurrentStep >= 1
								? "text-indigo-600 font-medium"
								: "text-gray-400"
						}`}
						title={firstLabel}
					>
						{firstLabel}
					</span>
					<span
						className={`text-xs truncate ${
							safeCurrentStep >= safeTotalSteps
								? "text-indigo-600 font-medium"
								: "text-gray-400"
						}`}
						title={lastLabel}
					>
						{lastLabel}
					</span>
				</div>
			)}
		</div>
	);
};

export default ProgressBar;
