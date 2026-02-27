import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
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
          src="/images/illustrations/email-send.svg"
          alt="image"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-danger-500 font-bold text-2xl tracking-wide">
          Register Account Success
        </h1>
        <p className="font-semibold text-gray-600 text-lg">
          Check your email for activation account.
        </p>
        <Button
          variant="bordered"
          className="mt-4 w-fit"
          color="danger"
          onClick={() => router.push('/')}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
