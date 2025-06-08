import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BaiTapThucHanhLayout from "./BaiTapThucHanhLayout/BaiTapThucHanhLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BaiTapThucHanhLayout></BaiTapThucHanhLayout>
    </>
  );
}

export default App;
