import IContentDto from "./ContentDto";
import IUpdateDto from "./UpdateDto";

interface IStatusDto {
    id: number,
    maintenance_status: string,	
    incident_severity: string,	
    titles: [IContentDto],	
    updates: [IUpdateDto],	
    created_at: string,	
    archive_at: string,	
    updated_at: string,	
    platforms: [string],
}

export default IStatusDto
