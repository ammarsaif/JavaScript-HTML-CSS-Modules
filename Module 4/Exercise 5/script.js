function fetchChuckNorrisJokes(searchTerm) {
  // API URL for Chuck Norris jokes search
  const apiUrl = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`;

  // Use fetch to send a request to the Chuck Norris Jokes API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display each joke in an article element
      const searchResultsContainer = document.getElementById('searchResults');
      searchResultsContainer.innerHTML = ''; // Clear previous results

      data.result.forEach(joke => {
        const div = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.textContent = joke.value;
        div.appendChild(paragraph);
        searchResultsContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error fetching Chuck Norris jokes:', error);
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the search term from the input field
  const searchTerm = document.getElementById('searchTerm').value;

  // Call the function to fetch and display Chuck Norris jokes based on the search term
  fetchChuckNorrisJokes(searchTerm);
});