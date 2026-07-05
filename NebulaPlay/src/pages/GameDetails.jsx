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
        <GameHero />

        <ScreenshotGallery />

        <TrailerPlayer />

        <GameInfo />

        <AchievementList />

        <SystemRequirements />

        <SimilarGames />
      </main>
    </MainLayout>
  );
}