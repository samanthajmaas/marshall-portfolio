import React from "react"
import "./Resume.css"
import resume from "../imgs/marshall-pdf.jpg"
import file from "../resumePDF/MBLEVINS.pdf"

export const Resume = (props) => {

    return (
        <>
        <article className="resume-page">
            <section className="resume-title-cont">
                <h2>Resume</h2>
            </section>
            <section className="resume-download-cont">
            <a href={file} download= "Marshall-Resume" class=" btn-theme  btn-theme-md  btn-default-bg text-uppercase">Download my Resume</a>
            </section>
        </article>
            <article className="resume-img-cont">
                <section className="resume-img">
                    <img className="resume" src={resume} />
                </section>
            </article>
        </>
    )
}