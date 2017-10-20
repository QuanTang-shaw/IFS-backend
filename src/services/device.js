import get from './common'

export const  DeviceListActive = async function(obj){
    var result = await get(
              "Handler_Device_V1.ashx",
              "Device_ListActive",
              obj);
     return result;
}

export const  DevcategoryListActive = async function(obj){
    var result = await get(
              "Handler_DevCategory_V1.ashx",
              "DevCategory_ListActive",
              obj);
     return result;
}