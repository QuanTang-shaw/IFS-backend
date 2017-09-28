import get from './common'

export const workshopListActive = async  function (obj){
    let result = await get(
        "Handler_Workshop_V1.ashx",
        "Workshop_ListActive",
        obj);
    return result;
}