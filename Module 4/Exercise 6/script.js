function randomChuckNorrisJoke() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Print only the joke to the console
        console.log('Chuck Norris Joke:', data.value);
      })
      .catch(error => {
        console.error('Error fetching Chuck Norris joke:', error);
      });
  }

  randomChuckNorrisJoke();