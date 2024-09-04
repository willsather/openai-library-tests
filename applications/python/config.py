import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('OPENAI_API_KEY')
BASE_URL = os.getenv('OPENAI_BASE_URL')
MODEL = os.getenv('MODEL', 'gpt-3.5-turbo')
