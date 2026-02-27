import useRegister from "@/pages/auth/register/useRegister";
import { cn } from "@/utils/cn";
import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

export default function RegisterPage() {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    errors,
    handleRegister,
    handleSubmit,
    isPendingRegister,
    reset,
    setError,
  } = useRegister();
  return (
    <div className="flex w-full h-full flex-col lg:flex-row justify-center items-center gap-20">
      <div className="flex flex-col w-1/3 justify-center items-center gap-8">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustrations/login.svg"
          alt="image"
          width={1024}
          height={1024}
        />
      </div>

      <Card>
        <CardBody className="p-8">
          <h2 className="text-danger-500 font-bold text-xl">Create Account</h2>
          <p className="mb-4">
            Have an account?&nbsp;
            <Link href="/auth/login" className="text-danger-400 font-medium">
              Login here
            </Link>{" "}
          </p>
          {errors.root && (
            <p className="mb-2 font-medium text-danger">
              {errors?.root?.message}
            </p>
          )}

          <form action="" onSubmit={handleSubmit(handleRegister)}>
            <div
              className={cn(
                "w-80 flex flex-col gap-4",
                Object.keys(errors).length > 0 ? "gap-1" : "gap-4",
              )}
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Name"
                    type="text"
                    variant={"bordered"}
                    autoComplete="off"
                    isInvalid={errors.fullName !== undefined}
                    errorMessage={errors.fullName?.message}
                  />
                )}
              />
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Username"
                    type="text"
                    variant={"bordered"}
                    autoComplete="off"
                    isInvalid={errors.username !== undefined}
                    errorMessage={errors.username?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Email"
                    type="text"
                    variant={"bordered"}
                    autoComplete="off"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Password"
                    type={visiblePassword.password ? "text" : "password"}
                    variant={"bordered"}
                    autoComplete="off"
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-solid outline-transparent"
                        type="button"
                        onClick={() => handleVisiblePassword("confirmPassword")}
                      >
                        {visiblePassword ? (
                          <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Confirm Password"
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    variant={"bordered"}
                    autoComplete="off"
                    isInvalid={errors.confirmPassword !== undefined}
                    errorMessage={errors.confirmPassword?.message}
                    endContent={
                      <button
                        aria-label="toggle confirm password visibility"
                        className="focus:outline-solid outline-transparent"
                        type="button"
                        onClick={() => handleVisiblePassword("confirmPassword")}
                      >
                        {visiblePassword ? (
                          <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                )}
              />
              <Button
                className="bg-danger-500 text-white font-semibold text-base tracking-wide"
                type="submit"
              >
                {isPendingRegister ? (
                  <Spinner color="white" size="sm"></Spinner>
                ) : (
                  "Register"
                )}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
