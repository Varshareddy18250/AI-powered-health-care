from flask import Flask, jsonify, request
from flask_cors import CORS
from vitals_model import analyze_vitals

app = Flask(__name__)
CORS(app)

@app.route("/api/vitals", methods=["POST"])
def vitals():
    data = request.json
    analysis = analyze_vitals(data)
    return jsonify(analysis)

if __name__ == "__main__":
    app.run(debug=True)
