import MinhoPage from "./minhoPage"
import Test from "./Test"
import DBserver from "./DBserver"
import { GoogleChart } from "./GoogleChart"
import { GoogleChart02 } from "./GoogleChart02"
import DBserver03 from "./DBserver03"
import DBgoogle from "./DBgoogle"
import { HandmadeChart } from "./HandmadeChart"

const App = () => {
  return <div>
    이거뜨면 프로젝트 모듈 성공임 <br/>
    <img src='./img/linkinpark.png' alt="linkinpark" />
    <MinhoPage />
    <Test />
    <div>
      {/* <DBserver /> */}
      {/* <DBserver02 /> */}
    </div>
    <div>
      <GoogleChart />
    </div>
    <div>
      <GoogleChart02 />
    </div>
    <div>
      {/* <DBserver03 /> */}
    </div>
    <div>
      <DBgoogle />
    </div>
    <div>
      <HandmadeChart width={1000} height={1000} date={["20220202"]} open={[10000]} close={[999999]} high={[99999900]} low={[32333]} volume={[1000000000000]} name={["존버"]} />
    </div>
  </div>;
}
export default App;
