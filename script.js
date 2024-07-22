$(document).ready(function() {
    // Function to fetch news updates
    function fetchNews() {
        // Replace with your API endpoint that provides news updates
        var apiUrl = 'https://your-api-url/news'; 

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(response) {
                // Clear previous news items
                $('#news-list').empty();

                // Iterate through the response and display news items
                response.forEach(function(newsItem) {
                    var article = `<div class="news-item">
                                      <h2>${newsItem.title}</h2>
                                      <p>${newsItem.description}</p>
                                      <p class="published-at">${newsItem.publishedAt}</p>
                                   </div>`;
                    $('#news-list').append(article);
                });
            },
            error: function(error) {
                console.error('Error fetching news:', error);
            }
        });
    }

    // Fetch news on page load
    fetchNews();

    // Fetch news every 5 minutes (adjust interval as needed)
    setInterval(fetchNews, 5 * 60 * 1000); // 5 minutes in milliseconds
});
