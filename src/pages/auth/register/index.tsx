import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/features/Auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}
