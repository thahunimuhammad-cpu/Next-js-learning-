import { DashboardLayout } from "@/components/layout";

export const metadata = {
  title: "Dashboard - E-Commerce Admin",
  description: "E-Commerce Admin Dashboard",
};

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
