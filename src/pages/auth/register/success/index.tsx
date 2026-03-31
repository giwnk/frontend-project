import AuthLayout from "@/components/layouts/auth-layout";
import Register from "@/features/auth/components/register-success";

export default function Index() {
  return (
    <AuthLayout title="Acara | Registration Success">
      <Register />
    </AuthLayout>
  );
}
