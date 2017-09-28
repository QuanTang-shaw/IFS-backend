import get from './common'

export const  DeviceListActive = async function(obj){
    var result = await get(
              "Handler_Device_V1.ashx",
              "Device_ListActive",
              obj);
     return result;
}