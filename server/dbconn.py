import pymysql
import pymysql.cursors


def dbconnect():
    conn = pymysql.connect(
      host='127.0.0.1',
      port=3000,
      user='root', 
      password='pass',
      db='aitrading_db',
      charset='utf8',
      init_command='SET NAMES UTF8',
      cursorclass=pymysql.cursors.DictCursor
      )
    return conn


def data_by_code(code):
    conn = dbconnect()
    cur = conn.cursor()
    # sql = f'SELECT open,high,low,close,DATE_FORMAT(day, "%Y-%m-%d") as day FROM {code}'
    sql = f'SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "%{code}_d"'
    cur.execute(sql)
    company = cur.fetchone()
    sql = f'SELECT open,high,low,close,DATE_FORMAT(day, "%Y-%m-%d") as day FROM {company["TABLE_NAME"]} ORDER BY day DESC'
    cur.execute(sql)
    results = cur.fetchmany(140)
    conn.close()
    return results


def search_company_name(name):
    conn = dbconnect()
    cur = conn.cursor()
    sql = f'SELECT name,code FROM `aitrading_db`.`companyList` WHERE name LIKE "{name}%"'
    cur.execute(sql)
    results = cur.fetchall()
    conn.close()
    return results