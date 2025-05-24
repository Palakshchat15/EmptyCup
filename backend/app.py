from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api/listings')
def get_listings():
    listings = [
        {
            "id": 1,
            "name": "Epic Designs",
            "rating": 3.5,
            "description": "Team of 4 designers from Bangalore with 4 years of experience.",
            "projects": 57,
            "years": 8,
            "priceLevel": 2,
            "phones": ["+91 - 984532853", "+91 - 984532854"]
        },
        {
            "id": 2,
            "name": "Studio - D3",
            "rating": 4.5,
            "description": "Studio based in Bangalore with expertise in luxury interiors.",
            "projects": 43,
            "years": 6,
            "priceLevel": 3,
            "phones": ["+91 - 984532853", "+91 - 984532854"]
        }
    ]
    return jsonify(listings)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
