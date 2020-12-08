from flask import Flask, json, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def upload_file():
    return jsonify({"hello": "world"}), 200

if __name__ == '__main__':
	app.run(host='0.0.0.0',debug = True)