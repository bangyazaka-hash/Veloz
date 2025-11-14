import AdminCard from "@/app/components/AdminCard";

export default function AdminDashboard() {
  return (
    <div className="flex justify-center gap-6 mt-20">
      <AdminCard title="Frame" link="/Admin/frame" />
      <AdminCard title="Wheel" link="/Admin/wheel" />
      <AdminCard title="Component" link="/Admin/component" />
    </div>
  );
}
