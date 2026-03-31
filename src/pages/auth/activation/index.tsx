import AuthLayout from "@/components/layouts/AuthLayout";
import Activation from "@/features/Auth/components/Activation";
import authServices from "@/features/Auth/services/auth";

interface PropTypes {
  status: "success" | "failed";
}

const ActivationPage = (props: PropTypes) => {
  return (
    <AuthLayout>
      <Activation {...props} />
    </AuthLayout>
  );
};

export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: context.query.code });
    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}

export default ActivationPage;
