from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "An unexamined life is not worth living.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "The only limit to our realization of tomorrow is our doubts of today."
]

@app.route('/quote', methods=['GET'])
def get_quote():
    return jsonify({'quote': random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)
