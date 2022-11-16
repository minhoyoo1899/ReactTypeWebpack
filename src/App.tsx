import MinhoPage from "./minhoPage"
import Test from "./Test"
import DBserver from "./DBserver"
import DBserver02 from "./DBserver02"

const App = () => {
  return <div>
    이거뜨면 프로젝트 모듈 성공임 <br/>
    <img src='./img/linkinpark.png' alt="linkinpark" />
    <MinhoPage />
    <Test />
    <div>
      <DBserver />
      <DBserver02 />
    </div>
  </div>;
}
export default App;
