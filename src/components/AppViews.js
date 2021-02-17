import { Route } from "react-router-dom"
import { Nav } from './nav/Nav';
import { HomePage } from './home/Home';
import { About } from "./about/About";
import { Portfolio } from "./portfolio/Portfolio";

export const AppViews = (props) => {
    return (
        <>
            <Nav {...props} />

            <Route exact path="/" render={
                props => <HomePage{...props} />
            } />

            <Route exact path="/about" render={
                props => <About{...props} />
            } />

            <Route exact path="/portfolio" render={
                props => <Portfolio{...props} />
            } />
        </>
    )
}