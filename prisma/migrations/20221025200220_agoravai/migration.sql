-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "hasGlobalHighlights" DROP NOT NULL,
ALTER COLUMN "finalResultOnly" DROP NOT NULL,
ALTER COLUMN "customId" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "hasEventPlayerStatistics" DROP NOT NULL,
ALTER COLUMN "slug" DROP NOT NULL,
ALTER COLUMN "hasEventPlayerHeatMap" DROP NOT NULL,
ALTER COLUMN "changes" DROP NOT NULL,
ALTER COLUMN "roundInfo" DROP NOT NULL,
ALTER COLUMN "tournament" DROP NOT NULL,
ALTER COLUMN "time" DROP NOT NULL,
ALTER COLUMN "winnerCode" DROP NOT NULL;