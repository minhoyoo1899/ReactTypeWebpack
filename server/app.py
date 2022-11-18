from flask import Flask
from dbconn import data_by_code, search_company_name

app = Flask(__name__)

app.config['JSON_AS_ASCII'] = False


@app.route('/')
def home():
    return 'hello world'


@app.route('/code/<code>')
def code(code):
    data = data_by_code(code)
    return data


@app.route('/name/<name>')
def name(name):
    data = search_company_name(name)
    return data


if __name__ == '__main__':
    app.run(debug=True)