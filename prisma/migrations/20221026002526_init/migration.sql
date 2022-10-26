-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "homeTeam" JSONB NOT NULL,
    "awayTeam" JSONB NOT NULL,
    "homeScore" JSONB NOT NULL,
    "awayScore" JSONB NOT NULL,
    "hasGlobalHighlights" BOOLEAN,
    "finalResultOnly" BOOLEAN,
    "customId" TEXT,
    "status" JSONB,
    "hasEventPlayerStatistics" BOOLEAN,
    "slug" TEXT,
    "homeRedCards" INTEGER,
    "hasEventPlayerHeatMap" BOOLEAN,
    "changes" JSONB,
    "roundInfo" JSONB,
    "tournament" JSONB,
    "time" JSONB,
    "coverage" INTEGER,
    "startTimestamp" INTEGER NOT NULL,
    "winnerCode" INTEGER,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
