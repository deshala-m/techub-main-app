import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "@/pages/home/home-page.tsx";
import NotFoundPage from "@/pages/common/not-found-page.tsx";
import AppDashboard from "@/components/dashboard/app-dashboard.tsx";
import LoginPage from "@/pages/login/login-page.tsx";
import SignupPage from "@/pages/signup/sign-up.tsx";
import GoodsReceivePage from "@/pages/inventory/goods-receive-page.tsx";
import GoodsIssuePage from "@/pages/inventory/goods-issue-page.tsx";
import CustomerReturnPage from "@/pages/inventory/customer-return-page.tsx";
import MarketplacesPage from "@/pages/marketplace/marketplaces-page.tsx";
import OrdersPage from "@/pages/marketplace/orders-page.tsx";
import CustomersPage from "@/pages/marketplace/customers-page.tsx";
import AccountPage from "@/pages/account/account-page.tsx";
import UserManagementPage from "@/pages/admin/user-management-page.tsx";
import MarketplaceHome from "@/pages/marketplace/marketplace-home-page";
import AppDetail from "@/pages/marketplace/app-detail-page.tsx";
import HRSuitePage from "./pages/hr-suite/hr-suite-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>,
        children: [
            {index: true, element: <AppDashboard/>},
            {
                path: "inventory",
                children: [
                    {path: "goods-receive", element: <GoodsReceivePage/>},
                    {path: "goods-issue", element: <GoodsIssuePage/>},
                    {path: "customer-return", element: <CustomerReturnPage/>}
                ]
            },
            {
                path: "marketplace",
                children: [
                    {index: true, element: <MarketplaceHome/>},
                    {path: "app/:id", element: <AppDetail/>},
                    {path: "marketplaces", element: <MarketplacesPage/>},
                    {path: "orders", element: <OrdersPage/>},
                    {path: "customers", element: <CustomersPage/>}
                ]
            },
            {
                path: "hr-suite",
                element: <HRSuitePage/>
            },
            {
                path: "account",
                element: <AccountPage/>
            },
            {
                path: "admin",
                children: [
                    {path: "users", element: <UserManagementPage/>}
                ]
            }
        ]
    },
    {
        path: "/signin",
        element: <LoginPage/>
    },
    {
        path: "/sign-up",
        element: <SignupPage/>
    }
]);

const App = () => {
    return (
        <>
            <ThemeProvider defaultTheme={"light"} storageKey={"vite-ui-theme"}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

export default App;