import DashboardLayout from "@/components/layouts/dashboard-layout";
import Dashboard from "@/features/member/components/dashboard";

export default function DashboardMemberPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard Member"
      type="member"
    >
      <Dashboard />
    </DashboardLayout>
  );
}
