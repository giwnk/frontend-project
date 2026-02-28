import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface PropTypes {
    status: "success" | "failed"
}

const Activation = (props: PropTypes) => {
  const router = useRouter();
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-20">
      <div className="flex flex-col w-1/5 justify-center items-center gap-8">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src={
            props.status === "success"
              ? "/images/illustrations/email-send.svg"
              : "/images/illustrations/pending.svg"
          }
          alt="image"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-danger-500 font-bold text-2xl tracking-wide">
          {props.status === "success"
            ? "Activation Success"
            : "Activation Failed"}
        </h1>
        <p className="font-semibold text-gray-600 text-lg">
          {props.status === "success"
            ? "Thank you for activation"
            : "Information code invalid"}
        </p>
        <Button
          variant="bordered"
          className="mt-4 w-fit"
          color="danger"
          onClick={() => router.push("/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default Activation;
