import AuthLayout from "@/components/layouts/auth-layout";
import Register from "@/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}
