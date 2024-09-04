from flask import Flask, jsonify, Response, stream_with_context
from chat_completion import basic, hello, stream

app = Flask(__name__)

@app.route('/api/basic', methods=['GET'])
def get_basic():
    result = basic()
    return jsonify(result)

@app.route('/api/hello', methods=['GET'])
def get_hello():
    result = hello()
    return jsonify(result)

@app.route('/api/stream', methods=['GET'])
def get_stream():
    return Response(stream_with_context(stream()), content_type='text/html')

if __name__ == '__main__':
    app.run(debug=True, port=3000)
