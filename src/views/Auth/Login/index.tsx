import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        {" "}
        Belum Punya Akun ? Registrasi{" "}
        <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
