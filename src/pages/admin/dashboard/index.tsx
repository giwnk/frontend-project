import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/features/admin/components/Dashboard";

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
