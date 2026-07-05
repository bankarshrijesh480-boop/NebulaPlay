import MainLayout from "../layouts/MainLayout";

import {
  GameHero,
  ScreenshotGallery,
  TrailerPlayer,
  GameInfo,
  AchievementList,
  SystemRequirements,
  SimilarGames,
} from "../components/game-details";

export default function GameDetails() {
  return (
    <MainLayout>
      <main className="overflow-x-hidden bg-slate-950 text-white">
        {/* Hero */}
        <GameHero />

        {/* Gallery */}
        <ScreenshotGallery />

        {/* Trailer */}
        <TrailerPlayer />

        {/* Game Information */}
        <GameInfo />

        {/* Achievements */}
        <AchievementList />

        {/* Requirements */}
        <SystemRequirements />

        {/* Similar Games */}
        <SimilarGames />
      </main>
    </MainLayout>
  );
}