let APIURL = '';

switch(window.location.hostname){
    //Local host name of react app
    case 'localhost' || '127.0.0.1':
        //local host name of API
        APIURL= 'http://localhost:3000';
        break;
        case 'as-quote-client.herokuapp.com':
            //full URL of Depoyed API
            APIURL ='https://as-quote-server.herokuapp.com';
}
export default APIURL;