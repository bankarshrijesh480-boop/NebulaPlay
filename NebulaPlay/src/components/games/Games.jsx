import MainLayout from "../layouts/MainLayout";

import FeaturedBanner from "../components/games/FeaturedBanner";
import GameFilters from "../components/games/GameFilters";
import GameCategories from "../components/games/GameCategories";
import TrendingGames from "../components/games/TrendingGames";
import ContinuePlaying from "../components/games/ContinuePlaying";
import RecentlyAdded from "../components/games/RecentlyAdded";
import GameGrid from "../components/games/GameGrid";

export default function Games() {
  return (
    <MainLayout>
      <main className="overflow-x-hidden bg-slate-950 text-white">
        {/* Hero Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10">
          <FeaturedBanner />
        </section>

        {/* Filters */}
        <GameFilters />

        {/* Categories */}
        <GameCategories />

        {/* Trending */}
        <TrendingGames />

        {/* Continue Playing */}
        <ContinuePlaying />

        {/* Recently Added */}
        <RecentlyAdded />

        {/* Complete Library */}
        <GameGrid
          title="Complete Game Library"
          subtitle="Browse hundreds of AAA cloud games ready to play instantly on NebulaPlay."
        />
      </main>
    </MainLayout>
  );
}