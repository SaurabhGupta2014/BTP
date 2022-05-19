import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";


const user="username";
const App=()=> {
  return (
    <div className="App">
     { user==null?<Login/>:<HomePage/>}
    </div>
  );
}

export default App;
