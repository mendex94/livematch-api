import { Prisma } from '@prisma/client';

export class CreateMatchDto implements Prisma.MatchCreateInput {
  homeTeam: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  awayTeam: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  homeScore: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  awayScore: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  hasGlobalHighlights: boolean;
  finalResultOnly: boolean;
  customId: string;
  status: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  hasEventPlayerStatistics: boolean;
  slug: string;
  homeRedCards?: number;
  hasEventPlayerHeatMap: boolean;
  changes: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  roundInfo: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  tournament: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  time: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  coverage?: number;
  startTimestamp: number;
  winnerCode: number;
}
