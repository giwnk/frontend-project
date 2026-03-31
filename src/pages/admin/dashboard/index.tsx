import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/features/Admin/components/Dashboard";

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
