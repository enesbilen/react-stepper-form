import { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import "./assets/css/tailwind.scss";
import CurrentForm from "./Form";
import stepperValidation from "./validations/stapper-validation"; // Stepper validasyonunu içe aktarın
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="container">
        <Formik
          validationSchema={stepperValidation}
          initialValues={{
            step: 1,
            lastStep: 5,

            //step 1
            name: "",
            surname: "",
            age: "",
            jop: "",
            email: "",

            //step 2
            school: "",
            department: "",
            graduation: "",
            diploma: "",

            //step 3
            company: "",
            position: "",
            startwork: "",
            endwork: "",
            missiondesc: "",

            //step 4
            computerSkill: [
              {
                skill: "",
              },
            ],
            checkedLang: [],

            //step 5
            myFile: "",
            about: "",
          }}
          onSubmit={(values, actions) => {
            console.log("values", values);
            toast.success("Successfully toasted!");
          }}
        >
          {({ values, setFieldValue, isValid, dirty, errors }) => {
            return (
              <>
                <Toaster position="top-center" />
                <Form>
                  <CurrentForm
                    values={values}
                    setFieldValue={setFieldValue}
                    isValid={isValid}
                    dirty={dirty}
                    errors={errors}
                    step={values.step}
                    prevHandle={() => setFieldValue("step", values.step - 1)}
                    nextHandle={() => setFieldValue("step", values.step + 1)}
                    stepHandle={(step) => setFieldValue("step", step)}
                  />
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default App;
