import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Education() {
  return (
    <>
      {/* Step 2 Form */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="school">Last School Name</label>
          <Field
            className="customInput"
            type="text"
            name="school"
            id="school"
            placeholder="Harvard University"
            required
          />
          <ErrorMessage
            name="school"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
        <div>
          <label htmlFor="department">Department / Faculty</label>
          <Field
            className="customInput"
            type="text"
            name="department"
            id="department"
            placeholder="Computer Engineering"
            required
          />
          <ErrorMessage
            name="department"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
      </div>
      <div className="grid mt-5 grid-cols-2 gap-6">
        <div>
          <label htmlFor="graduation">Graduation Date</label>
          <Field
            className="customInput"
            type="date"
            name="graduation"
            id="graduation"
            required
          />
          <ErrorMessage
            name="graduation"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
        <div>
          <label htmlFor="diploma">Diploma Info</label>
          <Field
            className="customInput"
            type="number"
            name="diploma"
            id="diploma"
            placeholder="2"
            required
          />
          <ErrorMessage
            name="diploma"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
      </div>
    </>
  );
}
