import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
import Logo from "./nav_logo.png"

export const Nav = (props) => {
    return (
        <>
            <article className="nav-bar">
                <div className="nav">
                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push("/home")}>
                        Home
                            </Link>
                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push(`/about`)}>
                        About
                            </Link>

                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push("/portfolio")}>
                        Portfolio
                            </Link>

                    <img className="logo" src={Logo} />

                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push(`/resume`)}>
                        Resume
                            </Link>
                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push(`/contact`)}>
                        Contact
                            </Link>

                    <Link
                        className="nav__btn"
                        onClick={() => props.history.push(`/feed`)}>
                        Feed
                            </Link>
                </div>
            </article>
        </>
    )
}