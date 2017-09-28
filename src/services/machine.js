import get from './common'

export const  WorkstationListActive = async function(obj){
    var result = await get(
              "Handler_Workstation_V1.ashx",
              "Workstation_ListActive",
              obj);
     return result;
}