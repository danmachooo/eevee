import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-20 flex-1 p-6 transition-all md:ml-64">
        {children}
      </main>
    </div>
  );
}
