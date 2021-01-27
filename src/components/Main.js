import './Main.css';
import { Route } from "react-router-dom"
import { Nav } from './nav/Nav';
import { HomePage } from './home/Home';

export const Main = (props) => {
  return (
    <>
      <Nav {...props}/>
      <HomePage {...props}/>
    </>
  )
}
