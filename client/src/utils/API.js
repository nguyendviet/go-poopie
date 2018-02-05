import axios from 'axios';

export default {
    // Gets all bathrooms
    getBathrooms: params => {
        return axios.get('/api/bathrooms');
    },

    saveBathroom: bathroomData => {
        return axios.post('/api/bathrooms', bathroomData);
    },
    saveUser: userData => {
        return axios.post('/api/users/signup', userData);
    },
    login: email => {
        return axios.get('/api/users/login', {params:{email: email}});
    }
};
   
