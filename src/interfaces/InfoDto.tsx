import IParticipantDto from "./ParticipantDto";

interface IInfoDto {
    game_datetime: number,
    game_length: number,
    game_variation: string,
    game_version: string,
    participants: [IParticipantDto],
    queue_id: number,
    tft_set_number: number,
}

export default IInfoDto
