import Button from "../components/Button";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import Note from "./Note";
import StepsAll from "../StepsAll";
import classNames from "classnames";

const CurrentForm = ({
  values,
  setFieldValue,
  isValid,
  dirty,
  errors,
  step,
  validationSchema,
  initialValues,
  prevHandle,
  nextHandle,
  stepHandle,
}) => {
  return (
    <>
      {/*       <p>Current Step: {step}</p>
      <pre>{JSON.stringify(values)}</pre>
      <pre>{JSON.stringify(isValid)}</pre>
      <pre>{JSON.stringify(dirty)}</pre> */}

      <header className="flex items-center justify-between border py-2 px-4 rounded-md">
        {StepsAll.map((step, index) => (
          <button
            type="button"
            onClick={() => stepHandle(step.step)}
            disabled={values.step < step.step}
            className="flex flex-col items-center justify-between"
            key={index}
          >
            <div
              className={classNames(
                "w-10 h-10 mb-2.5 rounded-full flex items-center justify-center font-semibold",
                {
                  "bg-blue-100 text-blue-600": values.step === step.step,
                  "bg-green-100 text-green-600": values.step > step.step,
                  "bg-zinc-100 text-zinc-700": values.step !== step.step,
                }
              )}
            >
              {values.step > step.step ? "✅" : step.step}
            </div>
            <div
              className={classNames("text-sm font-bold", {
                " text-blue-600": values.step === step.step,
                " text-green-600": values.step > step.step,
                " text-zinc-700": values.step !== step.step,
              })}
            >
              {step.title}
            </div>
          </button>
        ))}
      </header>

      <div className="mt-5">
        {/* Step1 Form */}
        {values.step === 1 && (
          <div>
            <PersonalInformation />
          </div>
        )}
        {/* Step2 Form */}
        {values.step == 2 && (
          <div>
            <Education />
          </div>
        )}
        {/* Step3 Form */}
        {values.step == 3 && (
          <div>
            <Experience />
          </div>
        )}
        {/* Step4 Form */}
        {values.step == 4 && (
          <div>
            <Skill values={values} />
          </div>
        )}
        {/* Step5 Form */}
        {values.step == 5 && (
          <div>
            <Note values={values} />
          </div>
        )}
        <div className="grid grid-cols-2 gap-x-4 mt-10">
          {(values.step > 1 && (
            <Button onClick={prevHandle} type="button" size="large">
              Prev
            </Button>
          )) || <div />}
          {values.step !== values.lastStep && (
            <Button
              onClick={nextHandle}
              type="button"
              variant="success"
              size="large"
              className="button"
              disabled={!isValid || !dirty}
            >
              Next
            </Button>
          )}
          {values.step == values.lastStep && (
            <Button variant="white-outline" type="submit" size="large">
              Submit
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentForm;
