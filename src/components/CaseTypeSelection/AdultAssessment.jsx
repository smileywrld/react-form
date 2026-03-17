import React from "react";

const AdultAssessment = ({ formData, onFormDataChange }) => {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
      <h3 className="text-lg font-medium text-green-900 mb-4">
        Adult Assessment Details
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reason for Assessment *
          </label>
          <textarea
            name="assessmentReason"
            rows={3}
            value={formData.assessmentReason || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, assessmentReason: e.target.value })
            }
            placeholder="Please describe the reason for assessment..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Occupation *
          </label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, occupation: e.target.value })
            }
            placeholder="Current occupation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Educational Background *
          </label>
          <select
            name="educationLevel"
            value={formData.educationLevel || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, educationLevel: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="">Select...</option>
            <option value="secondary">Secondary School</option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employment Status *
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["Employed", "Self-employed", "Unemployed", "Student", "Retired"].map(
              (status) => (
                <label key={status} className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value={status.toLowerCase()}
                    checked={formData.employmentStatus === status.toLowerCase()}
                    onChange={(e) =>
                      onFormDataChange({ ...formData, employmentStatus: e.target.value })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{status}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdultAssessment;