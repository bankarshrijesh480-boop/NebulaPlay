import MainLayout from "../layouts/MainLayout";

import {
  DashboardSidebar,
  DashboardHeader,
  DashboardStats,
  RecentlyPlayed,
  ContinuePlaying,
  LibraryPreview,
  AchievementSummary,
  SubscriptionCard,
  NewsFeed,
} from "../components/dashboard";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="flex min-h-screen bg-slate-950 text-white">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-x-hidden">
          <DashboardHeader />

          <main className="px-8 py-8">
            <DashboardStats />

            <ContinuePlaying />

            <RecentlyPlayed />

            <LibraryPreview />

            <AchievementSummary />

            <SubscriptionCard />

            <NewsFeed />
          </main>
        </div>
      </div>
    </MainLayout>
  );
}