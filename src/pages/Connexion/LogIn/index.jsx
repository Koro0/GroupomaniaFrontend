import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useNavigate } from 'react-router-dom';
import { UserService } from "../../../components/UserServices";
import { useContext, useState } from "react";
import Context from "../../../components/Context";



export default function LogIn() {
    const { setLogged } = useContext(Context)
    const [isLaoding, setIsLaoding] = useState(false);

    const navigate = useNavigate()



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

    const onSubmit = async (data) => {
        setIsLaoding(true);
        await UserService.logIn(data).then((res) => {
            localStorage.setItem('connect', res.data.token);
            localStorage.setItem('user', res.data.userId);
            setLogged(true);
            navigate('/home');
        }).catch(() => {
            alert('Email ou mot de passe incorrect')
            setIsLaoding(false)
            setLogged(false);
        })
        reset();

    };

    const getFormErrorMessage = (name) => {
        return (
            errors[name] && <small className="p-error">{errors[name].message}</small>
        );
    };

    return (

        <div className="form-demo col-sm-5">

            <div className="form-box">
                <div className="card">
                    <div className="form-top">
                        <h5 className="text-center">Connexion</h5>
                    </div>
                    <div className="form-bottom">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid login-form">
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "Email est requis.",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@groupomania.[A-Z]{2,4}$/i,
                                                message: "Adresse e-mail invalide. E.g. example@groupomania.com"
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
                                        rules={{ required: "Mot de passe requis." }}
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
                                        Mot de passe*
                                    </label>
                                </span>
                                {getFormErrorMessage("password")}
                            </div>
                            <Button type="submit" label="Se Connecter" className="mt-2" />
                        </form>
                        <div className={isLaoding ? "laoder" : "laoderDisabled"}>
                            <span className="lettre">C</span>
                            <span className="lettre">H</span>
                            <span className="lettre">A</span>
                            <span className="lettre">R</span>
                            <span className="lettre">G</span>
                            <span className="lettre">E</span>
                            <span className="lettre">M</span>
                            <span className="lettre">E</span>
                            <span className="lettre">N</span>
                            <span className="lettre">T</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};