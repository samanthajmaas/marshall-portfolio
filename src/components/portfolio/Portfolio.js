import React from "react"
import { Link } from "react-router-dom"
import Hexagon from 'react-hexagon'
import "./Portfolio.css"
import Img6 from "../imgs/wine-6.jpg"
import ImageGallery from 'react-image-gallery';

export const Portfolio = (props) => {

    const photoScrollImages = [
        {
          original: Img6,
          thumbnail: Img6,
        },
        {
          original: Img6,
          thumbnail: Img6,
        },
        {
          original: Img6,
          thumbnail: Img6,
        },
      ];

    return (
        <>
            <article className="port-main-header-cont">
                <section className="port-main-header">
                    <h1>PORTFOLIO</h1>
                </section>
            </article>
            <article className="port-social-header-cont">
                <section className="port-social-header-title">
                    <h3 className="port-social-title">SOCIAL MEDIA & MARKETING</h3>
                    <div className="social-desc-para">Et pa volores nient dolum es dolenitas dicimusciame rerciur, anis
                        excere elit audaersperum fuga. Nam as quis aut la dolore dolorescimin porio ipsam rest, eumqui voluptat experum, omnia volore
                    </div>
                </section>
            </article>
            <article className="port-social-imgs-cont">
                <section className="port-social-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
                <section className="port-social-imgs-bott">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
            </article>
            <article className="port-info-header-cont">
                <section className="port-info-header-title">
                    <h3 className="port-info-title">INFOGRAPHICS & NEWS</h3>
                    <div className="info-desc-para">Et pa volores nient dolum es dolenitas dicimusciame rerciur, anis
                        excere elit audaersperum fuga. Nam as quis aut la dolore dolorescimin porio ipsam rest, eumqui voluptat experum, omnia volore
                    </div>
                </section>
            </article>

            <article className="port-info-imgs-cont">
                <section className="port-info-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
                <section className="port-info-imgs-bott">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
            </article>

            <article className="port-corps-header-cont">
                <section className="port-corps-header-title">
                    <h3 className="port-corps-title">U.S. PEACE CORPS</h3>
                    <div className="corps-desc-para">Et pa volores nient dolum es dolenitas dicimusciame rerciur, anis
                        excere elit audaersperum fuga. Nam as quis aut la dolore dolorescimin porio ipsam rest, eumqui voluptat experum, omnia volore
                    </div>
                </section>
            </article>
            <article className="port-corps-imgs-cont">
                <section className="port-corps-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
                <section className="port-corps-imgs-bott">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img6}
                        backgroundScale="1.05"
                        href=""
                    />
                </section>
            </article>
            <article className="hp-port-link-cont">
                <br>
                </br>
                <Link
                    className="nav__btn"
                    onClick={() => props.history.push("/resume")}>
                    RESUME
                </Link>
            </article>
            <article className="port-img-gallery">
                <ImageGallery items={photoScrollImages} />
            </article>
        </>
    )
}