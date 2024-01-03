import Link from "next/link";
import style from "./Register.module.css";

const ReqisterView = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Register Page</h1>
      <p>
        {" "}
        Sudah Punya Akun ? Login <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default ReqisterView;
