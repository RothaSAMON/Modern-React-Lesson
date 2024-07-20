import axios from 'axios';

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID kjzRhwZuH5R6keFkqq6aHeHzInN5xQ1mmEInaMSYTlc',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImage;