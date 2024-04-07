from flask import Flask, render_template
from flask_bootstrap import Bootstrap, bootstrap_find_resource

app = Flask(__name__)
Bootstrap(app)

@app.route("/")
def hello_world():
    return render_template('index.html')