document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let inputValue = document.getElementById('query').value;
  let apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(inputValue)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Print the search result to the console
      console.log('Result:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});