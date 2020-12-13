from flask import Flask,jsonify,request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_cors import CORS

app =Flask(__name__)
CORS(app)
cors = CORS(app,resources = {
    r"/*":{
        "origins":"*"
    }
})

app.config['MONGO_URI']="mongodb+srv://nihal:panasonic@cluster0.fwayb.mongodb.net/records?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route('/<string:uId>/<string:testId>',methods=['GET','PUT','DELETE'])
def testscrud(uId,testId):
    if(request.method=="GET"):
        tests=mongo.db[uId].find_one({"_id":testId})
        print("get request")
        tests= dumps(tests)
        print(tests)
        return tests
    elif(request.method=="PUT"):
        tests=mongo.db[uId].find({"_id":testId})
        tests= dumps(tests)
        print("putrequest")
        return tests
    else:
        mongo.db[uId].delete_one({"_id":testId})
        print("delete request received")
        return jsonify ({"message":"success"})

@app.route('/<string:userId>',methods=['GET','POST'])
def home(userId):
    if(request.method=='POST'):
        _request=request.get_json()
        document = _request
        _id=document["testId"]
        document['_id']=_id
        mongo.db[userId].insert_one(document)
        testPaper={}
        testPaper['_id']=_id
        testPaper['userId'] =userId
        mongo.db.tests.insert_one(testPaper)
        print("post request")
        return jsonify(document)
    else:
        tests=mongo.db[userId].find()
        tests= dumps(tests)
        return tests

@app.route('/tests/<string:testId>',methods=['GET','POST'])
def getNewTest(testId):
    if(request.method=='POST'):
        some_request=request.get_json()
        return jsonify({"you_sent":some_request})
    else:
        query={}
        query["_id"]=testId
        response  = mongo.db.tests.find_one(query)
        if(response==None):
            print(response)
            return jsonify({'message':"Error"})
        userId = response['userId']
        document={}
        document = mongo.db[userId].find_one(query)
        document= dumps(document)
        return document

if __name__ =="__main__":
    app.run(port=3001,debug=True)