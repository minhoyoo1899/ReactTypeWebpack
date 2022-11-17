import MinhoPage from "./minhoPage"
import Test from "./Test"
import DBserver from "./DBserver"
import { GoogleChart } from "./GoogleChart"
import { GoogleChart02 } from "./GoogleChart02"
import DBserver03 from "./DBserver03"

const App = () => {
  return <div>
    이거뜨면 프로젝트 모듈 성공임 <br/>
    <img src='./img/linkinpark.png' alt="linkinpark" />
    <MinhoPage />
    <Test />
    <div>
      <DBserver />
      {/* <DBserver02 /> */}
    </div>
    <div>
      <GoogleChart />
    </div>
    <div>
      <GoogleChart02 />
    </div>
    <div>
    <DBserver03 />
    </div>
  </div>;
}
export default App;
