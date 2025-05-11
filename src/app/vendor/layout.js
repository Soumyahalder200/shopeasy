import VendorSideber from "@/components/vendor/VendorSideber";
import VendorNavber from "@/components/vendor/VendorNavber";

export default function VendorDashboardLayout({ children }) {
    return (
      <div className="flex">
        {/* Sidebar for dashboard navigation */}
        <aside className="w-67 bg-gray-900 text-white min-h-screen p-4">
                <VendorSideber/>
        </aside>
        
        
        {/* Main content area */}
        <main className="flex-1 p-0">
          <VendorNavber/>
          {children}</main>
      </div>
    );
  }
  