import React from "react";

const ChildIntervention = ({ formData, onFormDataChange }) => {
  return (
    <div className="mt-6 p-6 bg-purple-50 rounded-lg border border-purple-200">
      <h3 className="text-lg font-medium text-purple-900 mb-4">
        Child & Adolescent Intervention Details
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Presenting Concerns *
          </label>
          <textarea
            name="presentingConcerns"
            rows={3}
            value={formData.presentingConcerns || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, presentingConcerns: e.target.value })
            }
            placeholder="Describe the main concerns or issues..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Previous Intervention/Therapy *
          </label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="previousIntervention"
                value="yes"
                checked={formData.previousIntervention === "yes"}
                onChange={(e) =>
                  onFormDataChange({ ...formData, previousIntervention: e.target.value })
                }
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="previousIntervention"
                value="no"
                checked={formData.previousIntervention === "no"}
                onChange={(e) =>
                  onFormDataChange({ ...formData, previousIntervention: e.target.value })
                }
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {formData.previousIntervention === "yes" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Details of Previous Intervention
            </label>
            <textarea
              name="previousInterventionDetails"
              rows={2}
              value={formData.previousInterventionDetails || ""}
              onChange={(e) =>
                onFormDataChange({ ...formData, previousInterventionDetails: e.target.value })
              }
              placeholder="Please provide details..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Goals for Intervention *
          </label>
          <textarea
            name="interventionGoals"
            rows={3}
            value={formData.interventionGoals || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, interventionGoals: e.target.value })
            }
            placeholder="What are the hoped-for outcomes?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
      </div>
    </div>
  );
};

export default ChildIntervention;