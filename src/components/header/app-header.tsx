import AppBreadcrumb from "@/components/breadcrumb/app-breadcrumb.tsx";

interface AppHeaderProps {
  currentPage: string; // Specify the expected type
}

export default function AppHeader({ currentPage }: AppHeaderProps) {
  return (
    <>
      <header
        className="flex h-16 shrink-0 items-center gap-2 transition-[width,height]
                    ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <AppBreadcrumb currentPage={currentPage} />
      </header>
    </>
  );
}
