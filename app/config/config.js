var senseApp;

var restURL='https://ukwin-ank-win7:3000/'
// Development
//  Aps ID - Adeel server
//var appID = 'd8a4d573-7b41-4059-aa12-adffe1755842';
var appID = 'Dashboard_2704.qvf';

// var config = {
//     host: 'ukwin-ank-win7',
//     prefix: "/",
//     port: 443,
//     isSecure: true
// };


// prod mode 

// var restURL='https://ptpseelm-nt4192.ikeadt.com:3000/'

// //Aps ID - IKEA server
// var appID = 'b171aa3d-8f3a-43d5-9f7a-0986a7875855';

var config = {
   host: window.location.hostname,
   prefix: "/",
   port: window.location.port,
   isSecure: window.location.protocol === "https:"
};




// //Aps ID - IKEA server
// var appID = '5f9dbfcf-e0bf-4657-976a-1abccf0e5686'; // 23 feb
// if (window.location.hostname === "bi.ikea.com") {
//     appID = 'e51ec3b2-716f-4ad3-947a-e9d6845fd38f';
// } else if (window.location.hostname === "bi.apps.ikeadt.com") {
//     appID = "b171aa3d-8f3a-43d5-9f7a-0986a7875855";
// } else if (window.location.hostname === "localhost") {
//     appID = "Dashboard9.qvf";
// }
// var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);

// var config = {
//     host: window.location.hostname,
//     prefix: prefix,
//     port: window.location.port,
//     isSecure: window.location.protocol === "https:"
// };
