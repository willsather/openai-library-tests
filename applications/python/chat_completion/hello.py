from client import client
from config import MODEL

def hello():
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Please repeat this and only this. Hello Test",
            }
        ],
        model=MODEL,
    )

    return response.choices[0].message.content
