import IStatusDto from "./StatusDto";

interface IPlatformDataDto{
    id: string,	
    name: string,	
    locales: [string],	
    maintenances: [IStatusDto],	
    incidents: [IStatusDto],

}

export default IPlatformDataDto