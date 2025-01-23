from fastapi import FastAPI
import requests

app = FastAPI()

# Replace with the API endpoint you want to fetch articles from
NEWS_API_URL = "https://newsapi.org/v2/top-headlines"
API_KEY = "749b453447d34a93aa686565e7a91512"  # Replace with your API key

@app.get("/api/articles")
def get_articles(country: str = "us", category: str = "technology"):
    try:
        params = {
            "country": country,
            "category": category,
            "apiKey": API_KEY
        }
        response = requests.get(NEWS_API_URL, params=params)
        response.raise_for_status()  # Raise an error for bad status codes
        articles = response.json().get("articles", [])
        return {"status": "success", "data": articles}
    except requests.RequestException as e:
        return {"status": "error", "message": str(e)}
