import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useNavigate } from 'react-router-dom';
import { UserService } from "../../../components/UserServices";
import { useContext } from "react";
import LoggedContext from "../../../components/LoggedContext";



export default function LogIn() {
    const { logged, setLogged } = useContext(LoggedContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (logged) {
            navigate('/home')
        } else {
            navigate('/')
        }
    }, [logged, navigate])

    const defaultValues = {
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
        UserService.logIn(data).then((res) => {
            localStorage.setItem('connect', res.data.token)
            localStorage.setItem('user', res.data.userId)
            setLogged(true);
            console.log(res.data)
        }).catch(() => setLogged(false))
        reset();
    };

    const getFormErrorMessage = (name) => {
        return (
            errors[name] && <small className="p-error">{errors[name].message}</small>
        );
    };

    return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">LogIn</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
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
                                            message: "Invalid email address. E.g. example@groupomania.com"
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
                                    Email
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
                        <Button type="submit" label="Login" className="mt-2" />
                    </form>
                </div>
            </div>
        </div >
    );
};