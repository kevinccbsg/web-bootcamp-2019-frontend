
const API_KEY = 'API KEY';

const api = (API_URL = 'https://api.tvmaze.com/') => {
  const searchAPIEndpoint = `${API_URL}search/shows?q=`;
  const showsAPIEndpoint = `${API_URL}shows`;
  return {
    getShows: async text => {
      try {
        const requestUrl = text ? `${searchAPIEndpoint}${text}` : showsAPIEndpoint;
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error('Error fetching shows');
        }
        const data = await response.json();
        const formatData = data.map(item => {
          if (item.show) {
            return item.show;
          }
          return item;
        });
        return formatData;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
    getShowDetail: async id => {
      try {
        const response = await fetch(`${showsAPIEndpoint}/${id}`);
        if (!response.ok) {
          throw new Error('Error getting a show');
        }
        const show = await response.json();
        return show;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    getQuotes: async id => {
      try {
        const response = await fetch(`${API_URL}/quote/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching quotes');
        }
        const quotes = await response.json();
        return quotes;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    createQuote: async (id, text) => {
      try {
        const response = await fetch(`${API_URL}/quote/${id}`, {
          method: 'POST',
          body: JSON.stringify({ quote: text }),
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error('Creating quote');
        }
        const responseBody = await response.json();
        return responseBody;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  };
};

export default api;
