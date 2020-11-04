from flask import Flask

app =Flask(__name__)

@app.route("/")
def home():
    return "hello world"

@app.route("/tests",methods=['POST'])
def getNewTest():
    data = request.form
    print("inside request handler")
    print(data);

if __name__ =="__main__":
    app.run(debug=True)