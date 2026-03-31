import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/features/Auth/components/RegisterSuccess";

export default function Index() {
  return (
    <AuthLayout title="Acara | Registration Success">
      <Register />
    </AuthLayout>
  );
}
