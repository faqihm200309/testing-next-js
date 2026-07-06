import { useState } from "react";
import styles from "./login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginViews = () => {
  const { push, query } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: any) => {
    setError("");
    setLoading(true);
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setLoading(false);
        push(callbackUrl);
      } else {
        setError("Email or password is incorect");
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      setError(error)
    }
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.login_title}>Login Page</h1>
      {error && <p className={styles.login_error}>{error}</p>}
      <div className={styles.login_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login_form_item}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className={styles.login_form_item_input}
            />
          </div>
          <div className={styles.login_form_item}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={styles.login_form_item_input}
            />
          </div>
          <button
            type="submit"
            className={styles.login_form_item_button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : " login"}
          </button>

        </form>
        <button onClick={() => signIn('google', {
          callbackUrl,
          redirect: false
        })} className={styles.login_form_item_google}>Sign In with google</button>
      </div>
      <p className={styles.login_link}>
        Belum punya akun? <Link href={"/auth/login"}>Sign up here</Link>
      </p>
    </div>
  );
};
export default LoginViews;
