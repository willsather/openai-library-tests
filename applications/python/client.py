import config

from openai import OpenAI

client = OpenAI(
    api_key=config.API_KEY,
    base_url=config.BASE_URL
)