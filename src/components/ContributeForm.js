import React, { useReducer } from "react";
import { useForm } from "react-hook-form";

const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
const SUBMIT_ERROR = "SUBMIT_ERROR";

const reducer = (state, { type, message }) => {
  switch (type) {
    case SUBMIT_ERROR:
      return {
        ...state,
        error: message,
        submitted: false,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        error: null,
        submitted: true,
      };
    default:
      return state;
  }
};

const initialState = {
  error: null,
  submitted: false,
};

const NewsletterForm = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const [formState, dispatch] = useReducer(reducer, initialState);

  const sendData = async (body) => {
    try {
      const response = await fetch("/api/submit-suggestion", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("There was a problem");

      dispatch({ type: SUBMIT_SUCCESS });
    } catch ({ message }) {
      dispatch({ type: SUBMIT_ERROR, message });
    }
  };

  const onSubmit = async (values) => await sendData(values);

  return formState.submitted ? (
    <p>Thanks for the suggestion. We'll review it, and get back to you.</p>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="form-input block w-full"
            placeholder="Your email"
            ref={register({
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Field is invalid",
              },
            })}
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          URL
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="url"
            name="url"
            id="url"
            className="form-input block w-full"
            placeholder="Suggestion URL"
            ref={register({
              required: true,
            })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        disabled={isSubmitting}
      >
        Submit suggestion
      </button>

      {formState.error && (
        <span className="text-red-700 text-sm my-3">{formState.error}</span>
      )}
    </form>
  );
};

export default NewsletterForm;
