import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
    Shield,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

import { useEffect, useState } from "react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [data, setData] = useState({
        user: {
            name: "",
            email: "",
            avatar: "/avatars/shadcn.jpg",
        },
        teams: [
            {
                name: "Techub Inc",
                logo: GalleryVerticalEnd,
                plan: "Enterprise",
            },
            {
                name: "Acme Corp.",
                logo: AudioWaveform,
                plan: "Startup",
            },
            {
                name: "Evil Corp.",
                logo: Command,
                plan: "Free",
            },
        ],
        navMain: [
            {
                title: "Inventory",
                url: "/inventory",
                icon: SquareTerminal,
                isActive: true,
                items: [
                    {
                        title: "Goods Receive",
                        url: "/inventory/goods-receive",
                    },
                    {
                        title: "Goods Issue",
                        url: "/inventory/goods-issue",
                    },
                    {
                        title: "Customer Return",
                        url: "/inventory/customer-return",
                    },
                ],
            },
            {
                title: "Marketplace",
                url: "/marketplace",
                icon: Bot,
                items: [
                    {
                        title: "Marketplaces",
                        url: "/marketplace/marketplaces",
                    },
                    {
                        title: "Orders",
                        url: "/marketplace/orders",
                    },
                    {
                        title: "Customers",
                        url: "/marketplace/customers",
                    },
                ],
            },
            {
                title: "Documentation",
                url: "#",
                icon: BookOpen,
                items: [
                    {
                        title: "Introduction",
                        url: "#",
                    },
                    {
                        title: "Get Started",
                        url: "#",
                    },
                    {
                        title: "Tutorials",
                        url: "#",
                    },
                    {
                        title: "Changelog",
                        url: "#",
                    },
                ],
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings2,
                items: [
                    {
                        title: "General",
                        url: "#",
                    },
                    {
                        title: "Team",
                        url: "#",
                    },
                    {
                        title: "Billing",
                        url: "#",
                    },
                    {
                        title: "Limits",
                        url: "#",
                    },
                ],
            },
            {
                title: "Admin",
                url: "#",
                icon: Shield,
                items: [
                    {
                        title: "User Management",
                        url: "/admin/users",
                    },
                ],
            },
        ],
        projects: [
            {
                name: "Design Engineering",
                url: "#",
                icon: Frame,
            },
            {
                name: "Sales & Marketing",
                url: "#",
                icon: PieChart,
            },
            {
                name: "Travel",
                url: "#",
                icon: Map,
            },
        ],
    });

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const { fetchUserAttributes } = await import('@aws-amplify/auth');
                const user = await fetchUserAttributes();
                // const { preferred_username, signInDetails } = user;

                setData(prev => ({
                    ...prev,
                    user: {
                        ...prev.user,
                        name: user.name || "",
                        email: user.email || ""
                    }
                }));
            } catch (error) {
                console.error('Error getting current user:', error);
            }
        };

        getCurrentUser();
    }, []);

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
