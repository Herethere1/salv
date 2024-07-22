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

// Example backend using Node.js and Express
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to fetch news updates
app.get('/news', async (req, res) => {
    try {
        // Example API endpoint for news from El Salvador
        const newsApiUrl = 'https://example-news-api.com/el-salvador';

        const response = await axios.get(newsApiUrl);
        const newsUpdates = response.data.articles.slice(0, 10); // Adjust as per API response structure

        res.json(newsUpdates);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
