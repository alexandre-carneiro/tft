import IContentDto from "./ContentDto";

interface UpdateDto {
    id: number,	
    author: string,	
    publish: boolean,	
    publish_locations: [string],	
    translations: [IContentDto],	
    created_at: string,	
    updated_at: string,
}

export default UpdateDto
