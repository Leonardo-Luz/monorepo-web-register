import RegisterInput from "./registerInput"
import "./registerBox.css";


const RegisterBox = () =>
{
    return (
        <div id="Box">
            <h2>Registration!</h2>
            <RegisterInput type="text">Username</RegisterInput>
            <RegisterInput type="email">Email</RegisterInput>            
            <RegisterInput type="password">Password</RegisterInput>
            <RegisterInput type="password">Comfirm Password</RegisterInput>            
            <RegisterInput type="date">BirthDay</RegisterInput>
        </div>
    )
}

export default RegisterBox;