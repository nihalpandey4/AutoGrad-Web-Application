from flask import Flask

app =Flask(__name__)

@app.route("/")
def home():
    return "hello world"

@app.route("/tests",methods=['POST'])
def getNewTest():
    return "Hello world"

if __name__ =="__main__":
    app.run(debug=True)