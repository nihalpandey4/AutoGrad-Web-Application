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
        tests= dumps(tests)
        return tests
    elif(request.method=="PUT"):
        tests=mongo.db[uId].find({"_id":testId})
        tests= dumps(tests)
        return tests
    else:
        mongo.db[uId].delete_one({"_id":testId})
        mongo.db.tests.delete_one({"_id":testId})
        return jsonify ({"message":"success"})

@app.route('/<string:userId>',methods=['GET','POST'])
def home(userId):
    if(request.method=='POST'):
        document=request.get_json()
        _id=document["testId"]
        document['_id']=_id
        mongo.db[userId].insert_one(document)
        testPaper={}
        testPaper['_id']=_id
        testPaper['userId'] =userId
        mongo.db.tests.insert_one(testPaper)
        return jsonify(document)
    else:
        tests=mongo.db[userId].find()
        tests= dumps(tests)
        return tests

@app.route('/tests/<string:testId>',methods=['GET','POST','PUT'])
def getNewTest(testId):
    
    if(request.method=="GET"):
        query={}
        query["_id"]=testId
        response  = mongo.db.tests.find_one(query)
        if(response==None):
            return jsonify({'message':"Error"})
        userId = response['userId']
        document={}
        document = mongo.db[userId].find_one(query)
        document= dumps(document)
        return document  

    elif(request.method=="PUT"):
        requestBody=request.get_json()
        query={}
        try:
            requestBody["students"]
        except:
            pass
        else:
            query["_id"]=testId
            response  = mongo.db.tests.find_one(query)
            if(response==None):
                return jsonify({'message':"Error"})
            userId = response['userId']
            document={}
            document = mongo.db[userId].update(query,requestBody,True)
            document =dumps(document)
            return jsonify(document)
    else:
        requestBody = request.get_json()
        print("Evaluating score for - ")
        print(requestBody)
        return jsonify({"message":"undefined request"})


if __name__ =="__main__":
    app.run(port=3001,debug=True)