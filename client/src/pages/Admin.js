import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

import { createChampion } from "../api/champion";

export default () => {
    const [formData, setFormData] = useState({});
    const defaultValues = {
        name: "",
        cost: "",
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        setFormData(data);
        createChampion(data);
        reset();
    };

    const getFormErrorMessage = (name) =>
        errors[name] && <small className="p-error">{errors[name].message}</small>;

    return (
        <>
        hi
            {/* <div className="form-demo p-col" style={{ marginTop: 50 }}>
                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-user-edit" />
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
                                        Champion Name
                                    </label>
                                </span>
                                {getFormErrorMessage("name")}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-dollar" />
                                    <Controller
                                        name="cost"
                                        control={control}
                                        rules={{
                                            required: "Cost is required.",
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
                                    <label htmlFor="cost" className={classNames({ "p-error": !!errors.cost })}>
                                        Cost
                                    </label>
                                </span>
                                {getFormErrorMessage("cost")}
                            </div>

                            <Button type="submit" label="Create" className="p-mt-2" />
                        </form>
                    </div>
                </div>
            </div> */}
        </>
    );
}