import React, { useState } from "react"
import "./Resume.css"
import resume from "../imgs/marshall-pdf.jpg"

export const Resume = (props) => {

    return (
        <>
            <article className="resume-img-cont">
                <section className="resume-img">
                    <img className="resume" src={resume} />
                </section>
            </article>
        </>
    )
}