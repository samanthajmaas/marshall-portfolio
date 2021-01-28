import './Main.css';
import { Route } from "react-router-dom"
import { AppViews } from './AppViews';

export const Main = () => {
  return (

      <Route render={props =>
        <AppViews
          {...props} />} />

  )
}
