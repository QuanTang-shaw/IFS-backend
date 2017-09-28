import get from './common'

export const  Vendor_ListActive = async function(obj){
    var result = await get(
              "Handler_Vendor_V1.ashx",
              "Vendor_ListActive",
              obj);
     return result;
}