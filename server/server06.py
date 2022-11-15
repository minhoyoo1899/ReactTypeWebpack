from flask import Flask
import pymysql as maria

app = Flask(__name__)
@app.route('/')
def home():
    return 'Hello, World!'
    
@app.route('/test')
def test():
    return "이 메세지가 나온다면 라우팅 테스트 성공"

@app.route('/test2')
def test2():
    return "이 메시지가 나온다면 라우팅 테스트2 성공!"

@app.route('/db')
def db():
  conn = maria.connect(
  host = 'localhost',
  user = 'root',
  password = 'TheoHernandez19!',
  database = 'aitrading_db',
  port = 3306,
  cursorclass = maria.cursors.DictCursor,
  charset ='utf8')
  cursor = conn.cursor()
  # SQL query 작성
  sql = "SELECT * FROM companylist LIMIT 1"
  # SQL query 실행
  cursor.execute(sql) 
  # SQL query 실행 결과를 가져옴
  result = cursor.fetchall()
  return result
  
    


if __name__ == '__main__':
    app.run(debug=True)