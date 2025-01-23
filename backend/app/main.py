from fastapi import FastAPI
import requests

app = FastAPI()

# Replace with your NewsAPI key
API_KEY = "your_newsapi_key"
NEWS_API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY

@app.get("/")
def read_root():
    return {"message": "Welcome to the Unbiased News API"}

@app.get("/news")
def get_news():
    response = requests.get(NEWS_API_URL)
    if response.status_code == 200:
        return response.json()
    return {"error": "Failed to fetch news"}
