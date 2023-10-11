import React from "react"
import "./registerInput.css";

type inputProps = {
    children: React.ReactNode,
    type: string
}

const InputForm = ( { children , type }: inputProps ) =>
{
    return (
        <label className="InputLabel">
            <p>{children} : </p>
            <input type={type}/>
        </label>
    )
}

const RegisterInput = ({ children , type }: inputProps) =>
{
    return (
        <div>
            <InputForm type={type}>{children}</InputForm>
        </div>
    )
}

export default RegisterInput;