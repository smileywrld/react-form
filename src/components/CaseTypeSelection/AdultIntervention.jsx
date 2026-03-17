import React from "react";

const AdultIntervention = ({ formData, onFormDataChange }) => {
  return (
    <div className="mt-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
      <h3 className="text-lg font-medium text-orange-900 mb-4">
        Adult Intervention Details
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Primary Concerns *
          </label>
          <textarea
            name="primaryConcerns"
            rows={3}
            value={formData.primaryConcerns || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, primaryConcerns: e.target.value })
            }
            placeholder="Describe your main concerns..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration of Concerns *
            </label>
            <select
              name="concernDuration"
              value={formData.concernDuration || ""}
              onChange={(e) =>
                onFormDataChange({ ...formData, concernDuration: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            >
              <option value="">Select...</option>
              <option value="less-1-month">Less than 1 month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="more-1-year">More than 1 year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Mental Health Support *
            </label>
            <select
              name="previousSupport"
              value={formData.previousSupport || ""}
              onChange={(e) =>
                onFormDataChange({ ...formData, previousSupport: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            >
              <option value="">Select...</option>
              <option value="none">None</option>
              <option value="counseling">Counseling</option>
              <option value="psychiatry">Psychiatry</option>
              <option value="therapy">Therapy</option>
              <option value="medication">Medication only</option>
              <option value="multiple">Multiple types</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Medications (if any)
          </label>
          <input
            type="text"
            name="currentMedications"
            value={formData.currentMedications || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, currentMedications: e.target.value })
            }
            placeholder="List any current medications"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Therapy Goals *
          </label>
          <textarea
            name="therapyGoals"
            rows={3}
            value={formData.therapyGoals || ""}
            onChange={(e) =>
              onFormDataChange({ ...formData, therapyGoals: e.target.value })
            }
            placeholder="What do you hope to achieve through therapy?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
      </div>
    </div>
  );
};

export default AdultIntervention;