import { useEffect, useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar.tsx";
import { AppSidebar } from "@/components/sidebar/app-sidebar.tsx";
import AppHeader from "@/components/header/app-header.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "@aws-amplify/auth";

export default function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username: string; userId: string | null }>(
    {
      username: "",
      userId: null,
    }
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        
        setUser({
          username: currentUser.username || "",
          userId: currentUser.userId || null,
        });
        console.log("currentUser", user);
        if (!currentUser.userId) {
          navigate("/signin");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser({ username: "", userId: null });
        navigate("/signin");
      }
    };

    fetchUser();
  }, []);


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader currentPage={window.location.pathname.split('/').pop() || ''} />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
