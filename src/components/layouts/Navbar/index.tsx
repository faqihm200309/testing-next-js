import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navbar.module.css";
import Script from "next/script";
import Image from "next/image";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <h1 className="big" id="title"></h1>
      <Script id="script-title" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'Navbar'`}
      </Script>
      <div className={styles.profile}>
        {data && data.user.fullname}
        {data?.user?.image && (
          <Image width={30} height={30} src={data.user.image} alt={data.user.fullname} className={styles.avatar} />
        )}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Signout
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Signin
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
