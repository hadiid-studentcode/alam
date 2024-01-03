import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const disablesNavbar = ["/auth/login", "/auth/register",'/404'];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <main>
      {!disablesNavbar.includes(pathname) && <Navbar />}

      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default AppShell;
