import MainLayout from "../layouts/MainLayout";

import {
  FeaturedBanner,
  GameFilters,
  GameCategories,
  TrendingGames,
  ContinuePlaying,
  RecentlyAdded,
  GameGrid,
} from "../components/games";

export default function Games() {
  return (
    <MainLayout>
      <main className="overflow-x-hidden bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10">
          <FeaturedBanner />
        </section>

        <GameFilters />

        <GameCategories />

        <TrendingGames />

        <ContinuePlaying />

        <RecentlyAdded />

        <GameGrid
          title="Complete Game Library"
          subtitle="Browse hundreds of AAA cloud games available instantly on NebulaPlay."
        />
      </main>
    </MainLayout>
  );
}