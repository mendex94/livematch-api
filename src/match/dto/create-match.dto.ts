import { Prisma } from '@prisma/client';

export class CreateMatchDto implements Prisma.public_matchCreateInput {
  homeTeam: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  awayTeam: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  homeScore: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  awayScore: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;
  hasGlobalHighlights?: boolean;
  finalResultOnly?: boolean;
  customId?: string;
  status?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  hasEventPlayerStatistics?: boolean;
  slug?: string;
  homeRedCards?: number;
  hasEventPlayerHeatMap?: boolean;
  changes?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  roundInfo?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  tournament?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  time?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  coverage?: number;
  startTimestamp: number;
  winnerCode?: number;
}
