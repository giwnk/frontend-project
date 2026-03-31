import AuthLayout from "@/components/layouts/auth-layout";
import Login from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <AuthLayout title="Acara | Login">
      <Login />
    </AuthLayout>
  );
}
