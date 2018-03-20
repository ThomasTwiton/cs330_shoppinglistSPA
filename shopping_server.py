from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)
mymemory = []

@app.route('/savelist') 
def savelist():
    mymemory = request.json    

@app.route('/restorelist')
def restorelist():
    return jsonify(mymemory)

app.run(debug=True, port=5001)