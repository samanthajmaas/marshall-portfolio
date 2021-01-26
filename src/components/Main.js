import './Main.css';
import { Route } from "react-router-dom"
import { Nav } from './nav/Nav';

export const Main = (props) => {
  return (
    <>
      <Nav {...props}/>
    </>
  )
}
