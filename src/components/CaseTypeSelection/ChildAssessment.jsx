import React from "react";

const ChildAssessment = ({ formData, onFormDataChange }) => {
  return (
    <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="text-lg font-medium text-blue-900 mb-4">
        Child & Adolescent Assessment Details
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
            School Grade/Level *
          </label>
          <input
            type="text"
            name="schoolGrade"
            value={formData.schoolGrade || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, schoolGrade: e.target.value })
            }
            placeholder="e.g., Standard 5, Form 2"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parent/Guardian Consent Obtained *
          </label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="consentObtained"
                value="yes"
                checked={formData.consentObtained === "yes"}
                onChange={(e) =>
                  onFormDataChange({ ...formData, consentObtained: e.target.value })
                }
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="consentObtained"
                value="no"
                checked={formData.consentObtained === "no"}
                onChange={(e) =>
                  onFormDataChange({ ...formData, consentObtained: e.target.value })
                }
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Previous Assessments (if any)
          </label>
          <textarea
            name="previousAssessments"
            rows={2}
            value={formData.previousAssessments || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, previousAssessments: e.target.value })
            }
            placeholder="Details of any previous assessments..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
      </div>
    </div>
  );
};

export default ChildAssessment;