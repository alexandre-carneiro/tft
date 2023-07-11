import IMiniSeriesDTO from "./MiniSeriesDTO";

interface ILeagueItemDTO {
    freshBlood: boolean,	
    wins: number,
    summonerName: string,	
    miniSeries: IMiniSeriesDTO,	
    inactive: boolean,	
    veteran: boolean,	
    hotStreak: boolean,	
    rank: string,	
    leaguePoints: number,	
    losses: number,	
    summonerId: string,
}

export default ILeagueItemDTO
