from flask import Flask

# Flask  인스턴스 객체 생성.  현재 실행되는 애플리케이션 모듈명 전달
# __name__ : 파이썬 전역변수  (이 경우 메인모듈로 실행되니까. '__main__' 이 들어감)
app = Flask(__name__)


# Flask  의 라우팅
# 특정 uri 가 요청 되었을때 실행되는 함수 정의
# 함수의 리턴값이 화면에 보이기 때문에 '뷰' 함수라고도 함.
@app.route("/")   # Decorator 를 사용하여 uri 와 뷰 함수 연결
def hello():
    return "와 점심이다. 정말 바뀌나요"

if __name__ == '__main__':
    app.run(debug=True)   # 서버실행
    # app.run(host='127.0.0.1', port='5000')   # 이와 같이 서버 주소와 port 를 지정하여 서버 실행가능
    # app.run(debug=True)  # 소스 변경시 auto reloading 
    
