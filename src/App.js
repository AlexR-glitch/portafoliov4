import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "./components/navbar/Menu";


export default function App(){
  return(
    <>
    <Router>
      <Menu />

    </Router>
    </>
  )
}