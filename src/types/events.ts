// Team - home or away
export interface Team {
  name: string;
  officialName: string;
  slug: string;
  abbreviation: string;
  teamCountryCode: string;
  stagePosition: number | null;  // null = no data
}

// Match result
export interface Result {
  homeGoals: number;
  awayGoals: number;
  winner: string | null;
  message: string | null;
}

// Stages of gameplay (example "ROUND OF 16")
export interface Stage {
  id: string;
  name: string;
  ordering: number;
}

// Main venue - one sporting event
export interface SportEvent {
  season: number;
  status: 'played' | 'scheduled';  // union type - only two value
  timeVenueUTC: string;             // ex. "16:00:00"
  dateVenue: string;                // ex. "2024-01-03"
  stadium: string | null;
  homeTeam: Team | null;
  awayTeam: Team | null;
  result: Result | null;
  stage: Stage;
  group: string | null;
  originCompetitionId: string;
  originCompetitionName: string;
}
