import get from './common'

export const FactoryListActive = async  function (){
    var result = await get(
              "Handler_Factory_V1.ashx",
              "Factory_ListActive",
              {
                  "nPageIndex": 0,
                  "nPageSize": -1,
                  "uParkUUID": 1,
                  "uFactoryTypeUUID":-1,
                    "uFactoryAdminUUID":-1
                });
     return result;
}

export const FactoryUpdate =async function (obj) {
    await   get("Handler_Factory_V1.ashx","Factory_Update",obj);
}