from flask import Flask, jsonify
from chat_completion import basic

app = Flask(__name__)

@app.route('/api/basic', methods=['GET'])
def get_basic():
    result = basic()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
