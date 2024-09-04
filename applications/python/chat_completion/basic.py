from client import client
from config import MODEL

def basic():
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Is 1+1=2? Only return a single word answer, only yes or no, and do not use punctuation",
            }
        ],
        model=MODEL,
    )

    return response.choices[0].message.content
