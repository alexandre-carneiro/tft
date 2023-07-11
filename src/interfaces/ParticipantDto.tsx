import ICompanionDto from "./CompanionDto";
import ITraitDto from "./TraitDto";
import IUnitDto from "./UnitDto";

interface IParticipantDto {
    companion: ICompanionDto,
    gold_left: number,
    last_round: number,
    level: number,
    placement: number,
    players_eliminated: number,
    puuid: string,
    time_eliminated: number,
    total_damage_to_players: number,
    traits: [ITraitDto],
    units: [IUnitDto],
}

export default IParticipantDto
