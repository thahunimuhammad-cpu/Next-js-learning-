import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Topbar />
      <main className="ml-64 pt-16 p-6">
        {children}
      </main>
    </div>
  );
}
