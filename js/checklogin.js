console.log(document.cookie.indexOf('X-Qlik-Session') );
console.log(document.cookie.match(/^(.*;)?\s*qlik\s*=\s*[^;]+(.*)?$/));
if( document.cookie.indexOf('X-Qlik-Session') == -1 ) {
    console.log('user not authenticated');
  //  window.location.replace('https://qs.itellidemo.dk?qlikTicket=yesyesyesy');
}
