import axios from 'axios';

export default {
    // Gets all bathrooms
    getBathrooms: function(params) {
        return axios.get('/api/bathrooms');
    }
};
