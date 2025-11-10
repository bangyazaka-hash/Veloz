import AdminCard from "@/app/components/AdminCard";

export default function AdminDashboard() {
  return (
    <div className="flex justify-center gap-6 mt-20">
      <AdminCard title="Frame" link="/admin/frame" />
      <AdminCard title="Wheel" link="/admin/wheel" />
      <AdminCard title="Component" link="/admin/component" />
    </div>
  );
}
