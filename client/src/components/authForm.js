import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";

import "./AuthForm.css";

const AuthForm = ({ typeOfForm, onSubmitForm }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    date: null,
    accept: false,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setFormData(data);
    // setShowMessage(true);
    onSubmitForm(data);
    reset();
  };

  const getFormErrorMessage = (name) =>
    errors[name] && <small className="p-error">{errors[name].message}</small>;

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="form-demo p-col">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i className="pi pi-check-circle" style={{ fontSize: "5rem", color: "var(--green-500)" }} />
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="p-d-flex p-jc-center">
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

            {/* Name Field */}
            {typeOfForm === 'register' &&
              <div className="p-field">
                <span className="p-float-label">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required." }}
                    render={({ field, fieldState }) => (
                      <InputText
                        id={field.name}
                        {...field}
                        autoFocus
                        className={classNames({
                          "p-invalid": fieldState.invalid,
                        })}
                      />
                    )}
                  />
                  <label htmlFor="name" className={classNames({ "p-error": errors.name })}>
                    Name*
                  </label>
                </span>
                {getFormErrorMessage("name")}
              </div>
            }

            {/* Email Field */}
            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label htmlFor="email" className={classNames({ "p-error": !!errors.email })}>
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>

            {/* Password Field */}
            <div className="p-field">
              <span className="p-float-label">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required." }}
                  render={({ field, fieldState }) => (
                    <Password
                      id={field.name}
                      {...field}
                      toggleMask
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                      header={<h6>Pick a password</h6>}
                      footer={passwordFooter}
                    />
                  )}
                />
                <label htmlFor="password" className={classNames({ "p-error": errors.password })}>
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>

            {/* Birthday Field */}
            {typeOfForm === 'register' &&
              <div className="p-field">
                <span className="p-float-label">
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <Calendar
                        id={field.name}
                        value={field.value}
                        onChange={(e) => field.onChange(e.value)}
                        dateFormat="dd/mm/yy"
                        mask="99/99/9999"
                        showIcon
                      />
                    )}
                  />
                  <label htmlFor="date">Birthday</label>
                </span>
              </div>
            }

            {/* Terms & Condition */}
            {typeOfForm === 'register' &&
              <div className="p-field-checkbox">
                <Controller
                  name="accept"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Checkbox
                      inputId={field.name}
                      onChange={(e) => field.onChange(e.checked)}
                      checked={field.value}
                      className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                  )}
                />
                <label htmlFor="accept" className={classNames({ "p-error": errors.accept })}>
                  I agree to the terms and conditions*
                </label>
              </div>
            }

            {/* Submit Button */}
            <Button type="submit" label="Submit" className="p-mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
