import axios from 'axios';

export default {
    // Gets all bathrooms
    getBathrooms: params => {
        return axios.get('/api/bathrooms');
    },

    saveBathroom: bathroomData => {
        return axios.post('/api/bathrooms', bathroomData);
    }
};