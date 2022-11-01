/* eslint no-useless-escape: 0 */

import React from "react";
import { useForm } from "react-hook-form";
import { sameAs } from "helpers/validators";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onRegister)}>
      <div className="field">
        <div className="control">
          <input
            {...register("fullName", { required: true })}
            name="fullName"
            className="input is-large"
            type="text"
            placeholder="Full Name"
          />
          <div className="form-error">
            <span className="help is-danger">
              {errors.fullName?.type === "required" && "Name is required"}
            </span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            className="input is-large"
            type="email"
            placeholder="Your Email"
            autoComplete="email"
          />
          <div className="form-error">
            <span className="help is-danger">
              {errors.email?.type === "required" && "Email is required"}
            </span>
            <span className="help is-danger">
              {errors.email?.type === "pattern" && "Email address is not valid"}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="field">
        <div className="control">
          <input {...register('avatar', { required: true, validate: {isValidImage, isValidUrl}})}
                 name="avatar"
                 className="input is-large"
                 type="text"
                 placeholder="Avatar"/>
            <div className="form-error">
              <span className="help is-danger">{ errors.avatar?.type === 'required' && 'Avatar is required'}</span>
              <span className="help is-danger">{ errors.avatar?.type === 'isValidImage' && 'Avatart extension is not valid'}</span>
              <span className="help is-danger">{ errors.avatar?.type === 'isValidUrl' && 'Avatart url is not valid'}</span>
            </div>
        </div>
      </div> */}
      <div className="field">
        <div className="control">
          <input
            {...register("password", { required: true, minLength: 6 })}
            name="password"
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
          />
          <div className="form-error">
            <span className="help is-danger">
              {errors.password?.type === "required" && "Password is required"}
            </span>
            <span className="help is-danger">
              {errors.password?.type === "minLength" && "Minimum Length is 6"}
            </span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("passwordConfirmation", {
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs(getValues, "password") },
            })}
            name="passwordConfirmation"
            className="input is-large"
            type="password"
            placeholder="Repeat Password"
            autoComplete="current-password"
          />
          <div className="form-error">
            <span className="help is-danger">
              {errors.passwordConfirmation?.type === "required" &&
                "Password Confirmation is required"}
            </span>
            <span className="help is-danger">
              {errors.passwordConfirmation?.type === "minLength" &&
                "Minimum Length is 6 characters"}
            </span>
            <span className="help is-danger">
              {errors.passwordConfirmation?.type === "sameAs" &&
                "Password confirmation is not the same"}
            </span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
