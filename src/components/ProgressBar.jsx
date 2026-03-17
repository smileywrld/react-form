import React from "react";

const ProgressBar = ({ currentStep, totalSteps = 2 }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-indigo-600">
          Section {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-gray-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span
          className={`text-xs ${
            currentStep >= 1 ? "text-indigo-600 font-medium" : "text-gray-400"
          }`}
        >
          Basic Information
        </span>
        <span
          className={`text-xs ${
            currentStep >= 2 ? "text-indigo-600 font-medium" : "text-gray-400"
          }`}
        >
          Case Type Selection
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;