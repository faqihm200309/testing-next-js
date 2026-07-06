import RegisterView from "@/views/Auth/Register";
import Link from "next/link";
import Router from "next/router";

const RegisterPage = () => {
    const handlerButton = () => {
        console.log("klik");
        Router.push("/auth/login")
    }
    return (
      <RegisterView/>
    )
}
export default RegisterPage;