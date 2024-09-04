from client import client
from config import MODEL

def stream():
    streamed_response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Please repeat this and only this once: Hello Stream Test",
            }
        ],
        model=MODEL,
        stream=True
    )

    for chunk in streamed_response:
        if chunk.choices[0].delta.content is not None:
            yield chunk.choices[0].delta.content
