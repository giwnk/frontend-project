import DashboardLayout from "@/components/layouts/dashboard-layout";
import Dashboard from "@/features/admin/components/dashboard";

export default function DashboardAdminPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard Admin"
      type="admin"
    >
      <Dashboard />
    </DashboardLayout>
  );
}
