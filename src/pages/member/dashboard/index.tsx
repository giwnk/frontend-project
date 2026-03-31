import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/features/member/components/Dashboard";

export default function DashboardMemberPage() {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard Member" type="member">
      <Dashboard />
    </DashboardLayout>
  );
}
