import RegisterInput from "./registerInput"
import "./registerBox.css";

type SubmitProps = {
    value: string,
}

const Submit =( { value }: SubmitProps ) =>
{
    return <input className="submit-button" type="submit" value={value}/>
}

const RegisterBox = () =>
{
    return (
        <form id="Box" >
            <h2>Registration!</h2>
            <RegisterInput type="text">Username</RegisterInput>
            <RegisterInput type="email">Email</RegisterInput>            
            <RegisterInput type="password">Password</RegisterInput>
            <RegisterInput type="password">Comfirm Password</RegisterInput>            
            <RegisterInput type="date">BirthDay</RegisterInput>
            <Submit value="Registrar-se"/>
        </form>
    )
}

export default RegisterBox;