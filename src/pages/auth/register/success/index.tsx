import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/auth/RegisterSuccess";

export default function Index() {
  return (
    <AuthLayout title="Acara | Registration Success">
      <Register />
    </AuthLayout>
  );
}
