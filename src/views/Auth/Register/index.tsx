import { useState } from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterView = () => {
    const { push } = useRouter()
    const [isLoading, setLoading] = useState(false)
    const [error,setError] = useState("")
    const handleSubmit = async (event: any) => {
        setError("")
        setLoading(true)
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
        };
        const result = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (result.status == 200) {
            setLoading(false)
            event.target.reset();
            push("/")
        } else {
            setLoading(false)
            setError(result.status == 400 ? "email already exist" : "")
        }
    };
    return (
        <div className={styles.register}>
            <h1 className={styles.register_title}>Register Page</h1>
            {error && <p className={styles.register_error}>eror</p>}
            <div className={styles.register_form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.register_form_item}>
                        <label htmlFor="fullname">Fullname</label>
                        <input
                            type="fullname"
                            id="fullname"
                            name="fullname"
                            placeholder="fullname"
                            className={styles.register_form_item_input}
                        />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            className={styles.register_form_item_input}
                        />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            className={styles.register_form_item_input}
                        />
                    </div>
                    <button type="submit" className={styles.register_form_item_button} disabled={isLoading}>
                       {isLoading  ? "Loading...": " Register"}
                    </button>
                </form>
            </div>
            <p className={styles.register_link}>
                Sudah punya akun? <Link href={"/auth/login"}>Sign here</Link>
            </p>
        </div>
    );
};
export default RegisterView;
