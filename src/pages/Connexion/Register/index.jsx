import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";

function signUp(data) {
    fetch('http://localhost:3500/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
export default function Register() {
    const defaultValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        console.log(data)
        signUp(data)
        reset();
    };

    const getFormErrorMessage = (name) => {
        return (
            errors[name] && <small className="p-error">{errors[name].message}</small>
        );
    };

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo col-sm-5">
            <div className="form-box">
                <div className="card">
                    <div className="form-top">
                        <h5 className="text-center">Register</h5>
                    </div>
                    <div className="form-bottom">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="firstname" control={control} rules={{
                                        required: 'firstname is required.',
                                        pattern: {
                                            value: /^[A-Za-z]$/i
                                        }
                                    }} render={({ field, fieldState }) => (
                                        <InputText id={field.firstname} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="firstname" className={classNames({ 'p-error': errors.firstname })}>Firstname*</label>
                                </span>
                                {getFormErrorMessage('firstname')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller name="lastname" control={control} rules={{
                                        required: 'Name is required.'
                                    }} render={({ field, fieldState }) => (
                                        <InputText id={field.lastname} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="lastname" className={classNames({ 'p-error': errors.lastname })}>Lastname*</label>
                                </span>
                                {getFormErrorMessage('lastname')}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "Email is required.",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@groupomania.[A-Z]{2,4}$/i,
                                                message: "Invalid email address. E.g. example@email.com"
                                            }
                                        }}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid": fieldState.invalid
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="email"
                                        className={classNames({ "p-error": !!errors.email })}
                                    >
                                        Example@Groupomania.com
                                    </label>
                                </span>
                                {getFormErrorMessage("email")}
                            </div>
                            <div className="field">
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
                                                    "p-invalid": fieldState.invalid
                                                })}
                                                header={passwordHeader}
                                                footer={passwordFooter}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="password"
                                        className={classNames({ "p-error": errors.password })}
                                    >
                                        Password*
                                    </label>
                                </span>
                                {getFormErrorMessage("password")}
                            </div>
                            <Button type="submit" label="Register" className="mt-2" />
                        </form>
                    </div>

                </div>
            </div>
        </div >
    );
};