import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import bg1 from "./resourses/images/bg1.jpg"
import bg2 from "./resourses/images/bg2.jpg"
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Layout urlBg={bg1} />
        <Layout colorBg={"#673273"} />
        <Layout urlBg={bg2} />
        <Footer />
    </div>
  );
}

export default App;
