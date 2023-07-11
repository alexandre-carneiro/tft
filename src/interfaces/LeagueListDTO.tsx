import ILeagueItemDTO from "./LeagueItemDTO";

interface ILeagueListDTO {
    leagueId: string,
    entries: [ILeagueItemDTO],
    tier: string,
    name: string,
    queue: string,
}

export default ILeagueListDTO
