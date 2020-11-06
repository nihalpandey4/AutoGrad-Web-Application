from flask import Flask,jsonify,request
from flask_cors import CORS

app =Flask(__name__)
CORS(app)
cors = CORS(app,resources = {
    r"/*":{
        "origins":"*"
    }
})

@app.route('/',methods=['GET','POST'])
def home():
    print(request);
    if(request.method=='POST'):
        some_request=request.get_json()
        return jsonify({"you_sent":some_request})
    else:
        return jsonify ({message:"Hello World"})

@app.route('/tests',methods=['GET','POST'])
def getNewTest():
    if(request.method=='POST'):
        some_request=request.get_json()
        return jsonify({"you_sent":some_request})
    else:
        return jsonify ({message:"Hello World"})

if __name__ =="__main__":
    app.run(port=3001,debug=True)