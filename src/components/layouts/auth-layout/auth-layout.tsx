import PageHead from "@/components/ui/page-head";
import { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="w-full h-screen">{children}</section>
    </>
  );
};

export default AuthLayout;
