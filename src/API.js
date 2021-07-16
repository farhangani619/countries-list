let API_URL = "";
export default {
  search(searchTerm) {
    if (searchTerm) {
      API_URL = `https://restcountries.eu/rest/v2/name/${searchTerm}`;
    } else {
      API_URL = `https://restcountries.eu/rest/v2/all`;
    }
    return fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 404) {
          return fetch(`https://restcountries.eu/rest/v2/capital/${searchTerm}`)
            .then((response) => response.json())
            .then((result) => {
              if (result.status === 404) {
                return fetch(
                  `https://restcountries.eu/rest/v2/callingcode/${searchTerm}`
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    if (result.status === 404) {
                      return (result = []);
                    }
                    return result;
                  });
              }
              return result;
            });
        }
        return result;
      });
  },
};
