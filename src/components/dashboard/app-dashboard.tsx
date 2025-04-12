import React from 'react';
import DashboardStats from './stats-card';

const AppDashboard: React.FC = () => {
    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome to your dashboard overview.</p>
            </div>
            <DashboardStats />
            {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50">
                        <SalesChart/>
                    </div>
                    <div className="aspect-video rounded-xl bg-muted/50">
                        <SalesChart/>
                    </div>
                    <div className="aspect-video rounded-xl bg-muted/50">
                        <SalesChart/>
                    </div>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"/>
            </div> */}
        </div>
    );
};

export default AppDashboard;