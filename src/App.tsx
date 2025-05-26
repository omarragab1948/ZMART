import { BrowserRouter } from "react-router";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
