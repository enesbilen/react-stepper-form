import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Experience() {
  return (
    <>
      {/* Step 3 Form */}
      <div>
        <label htmlFor="company">Company Name</label>
        <Field
          className="customInput"
          type="text"
          name="company"
          id="company"
          placeholder="Google"
          required
        />
        <ErrorMessage
          name="company"
          component="small"
          className="block text-sm text-red-600 mt-1"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="position">Position/Title</label>
        <Field
          className="customInput"
          type="text"
          name="position"
          id="position"
          placeholder="Front-End Developer"
          required
        />
        <ErrorMessage
          name="position"
          component="small"
          className="block text-sm text-red-600 mt-1"
        />
      </div>
      <div className="grid mt-5 grid-cols-2 gap-6">
        <div>
          <label htmlFor="startwork">Work Start Date</label>
          <Field
            className="customInput"
            type="date"
            name="startwork"
            id="startwork"
            required
          />
          <ErrorMessage
            name="startwork"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
        <div>
          <label htmlFor="endwork">Date of Termination</label>
          <Field
            className="customInput"
            type="date"
            name="endwork"
            id="endwork"
            placeholder="2"
            required
          />
          <ErrorMessage
            name="endwork"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="missiondesc">Mission Description</label>
        <Field
          className="customTextarea"
          component="textarea"
          name="missiondesc"
          id="missiondesc"
          placeholder="React, or React.js, is an open source Javascript library for building user interfaces, developed by Facebook in 2011."
          required
        />
        <ErrorMessage
          name="missiondesc"
          component="small"
          className="block text-sm text-red-600 mt-1"
        />
      </div>
    </>
  );
}
