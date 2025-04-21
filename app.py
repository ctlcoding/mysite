import os
from flask import Flask, render_template, request, redirect, url_for, session
from flask_bootstrap import Bootstrap, bootstrap_find_resource
import pickle
# from sklearn.linear_model import LinearRegression

print("Current working directory:", os.getcwd())

model_path = ""

# set path depending on environment
if(os.getcwd().find("Users") > 0):
    model_path = os.getcwd() + '\model.pkl'
else:
    model_path = os.getcwd() + '/mysite/model.pkl'

app = Flask(__name__)
Bootstrap(app)

app.secret_key = 'sessionkeys123'

print(model_path)
print("loading data model")
with open(model_path, 'rb') as f:
    lr = pickle.load(f)

@app.route("/")
def index():

    if session.get("salary"):

        return render_template('landing_about.html',salary=session["salary"])
    
    else: 

        return render_template('landing_about.html')

@app.route("/ml")
def ml():

    return render_template('landing_ml.html',salary="Predicted Salary is:$")

@app.route("/salary",methods=['POST'])
def prediction():

    salary = float(request.form['salary'])
    predicted_salary = "Predicted Salary is: $" + "{0:,.2f}".format(lr.predict([[salary]])[0])

    session["salary"] = predicted_salary
    return redirect(url_for('index'))
    # return render_template('landing_about.html',salary=predicted_salary)

@app.route("/viz")
def viz():

    return render_template('landing_viz.html',salary="Predicted Salary is:$")

if __name__ == "__main__":
    app.run(debug=True)