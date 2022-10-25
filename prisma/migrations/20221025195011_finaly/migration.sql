-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "homeTeam" JSONB NOT NULL,
    "awayTeam" JSONB NOT NULL,
    "homeScore" JSONB NOT NULL,
    "awayScore" JSONB NOT NULL,
    "hasGlobalHighlights" BOOLEAN NOT NULL,
    "finalResultOnly" BOOLEAN NOT NULL,
    "customId" TEXT NOT NULL,
    "status" JSONB NOT NULL,
    "hasEventPlayerStatistics" BOOLEAN NOT NULL,
    "slug" TEXT NOT NULL,
    "homeRedCards" INTEGER,
    "hasEventPlayerHeatMap" BOOLEAN NOT NULL,
    "changes" JSONB NOT NULL,
    "roundInfo" JSONB NOT NULL,
    "tournament" JSONB NOT NULL,
    "time" JSONB NOT NULL,
    "coverage" INTEGER,
    "startTimestamp" INTEGER NOT NULL,
    "winnerCode" INTEGER NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
