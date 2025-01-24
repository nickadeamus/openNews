from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin (change in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Replace with your NewsAPI key
API_KEY = "749b453447d34a93aa686565e7a91512"  # Add your API key here
NEWS_API_URL = f"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=749b453447d34a93aa686565e7a91512"

@app.get("/")
def read_root():
    return {"message": "Welcome to the Unbiased News API"}

@app.get("/news")
def get_news():
    response = requests.get(NEWS_API_URL)
    if response.status_code == 200:
        return response.json()
    return {"error": "Failed to fetch news"}

