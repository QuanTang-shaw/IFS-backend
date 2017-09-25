const get=function (str,op,obj) {
    var promise=new Promise(function (resolve,reject) {
        var url =`http://ifs.top-link.me/ifs/${str}`,
            req = new TRequest();
        req.exec(url,op,obj,
            // success:
            function (json) {
                // console.log(json);
                resolve(json);
            },
            // error:
            function (json) {
                console.log('err');
                reject(json);
            });
    });
    return promise;
}
export default get;