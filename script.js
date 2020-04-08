function fetchQuoteJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    //const pokemonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpsons.quote}</strong></p>
          <p>${simpsons.character}</p>
          <img src="${simpsons.image}" />
        `;
        document.querySelector('#simpsons').innerHTML = simpsonHtml;
      });
  }
  
  fetchQuoteJSON();