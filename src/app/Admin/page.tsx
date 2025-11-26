import AdminCard from "@/components/AdminCard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="
          flex flex-col md:flex-row
          justify-center items-stretch
          font-[lexend]
          gap-4 md:gap-6
          w-full max-w-4xl
          mt-10 md:mt-20
        "
      >
        <AdminCard title="Frame" link="/Admin/frame" />
        <AdminCard title="Wheel" link="/Admin/wheel" />
        <AdminCard title="Component" link="/Admin/component" />
      </div>
    </div>
  );
}