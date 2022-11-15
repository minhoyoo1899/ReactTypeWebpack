from flask import Flask
import pymysql as maria

app = Flask(__name__)
@app.route('/')
@app.route('/home')
def home():  
    return '''
    <h1>이건 h1 제목</h1>
    <p>이건 p 본문 </p>
    <a href="https://flask.palletsprojects.com">Flask 홈페이지 바로가기</a>
    '''

# @app.route('/test')
# def test():
#   return '''
#   <p>테스트메시지 이것이 나온다면 라우팅성공!</p>
#   '''
# if __name__ == '__main__':
#   app.run(debug=True)

# @app.route('/test2')
# def test():
#   return '''
#   <p>테스트메시지2 이것이 나온다면 라우팅 테스트 성공!</p>
#   '''
# if __name__ == '__main__':
#   app.run(debug=True)

@app.route('/db')
def db():
  conn = maria.connect(
    host = 'localhost',
    user = 'root',
    password = 'TheoHernandez19!',
    database = 'aitrading_db',
    port = 3306,
    cursorclass = maria.cursors.DictCursor,
    charset ='utf8'
  )
  cursor = conn.cursor()
  # SQL query 작성
  sql = "SELECT * FROM companylist LIMIT 1"
  # SQL query 실행
  cursor.execute(sql) 
  # SQL query 실행 결과를 가져옴
  result = cursor.fetchall()  
  return result