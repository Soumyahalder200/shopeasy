import AdminSideber from "@/components/admin/AdminSideber";

export default function AdminDashboardLayout({ children }) {
    return (
      <div className="flex">
        {/* Sidebar for dashboard navigation */}
        <aside className="w-67 bg-gray-900 text-white min-h-screen p-4">
          <AdminSideber/>
        </aside>
  
        {/* Main content area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  