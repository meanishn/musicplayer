module.exports = {
   getBaseUrl(env){
        switch (env) {
            case 'development':
                return 'http://localhost/api';
            case 'production':
                return 'https://tranceit-api.herokuapp.com/api'
    
        }
    }
}