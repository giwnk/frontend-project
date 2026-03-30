import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
