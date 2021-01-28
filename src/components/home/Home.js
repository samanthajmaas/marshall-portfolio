import React from "react"
import { Link } from "react-router-dom"
import Hexagon from 'react-hexagon'
import "./Home.css"
import Img1 from "../imgs/wine-1.jpg"
import Img2 from "../imgs/wine-2.jpg"
import Img3 from "../imgs/wine-3.jpg"
import Img4 from "../imgs/wine-4.jpg"
import Img5 from "../imgs/wine-5.jpg"
import Img6 from "../imgs/wine-6.jpg"


export const HomePage = (props) => {
    return (
        <>
            <article className="hp-header-cont">
                <section className="hp-header">
                    <h2>DESIGNS BY</h2>
                    <h1>MARSHALL BLEVINS</h1>
                </section>
            </article>
            <article className="hp-description-cont">
                <section className="hp-description-head">
                    <h3 className="description-header">Neighborhood designer, journalist & wine lover</h3>
                </section>
                <section className="hp-description">
                    <div className="description-para">Parbentiquid cepse talestri pristeludam iam demolic ienisquon tum et con hucienatuus
                    et; C. Mulius dempl. Viventr arissed mod facies consus, ut curo, que tuus re cupio me in
                    horus. Cupicae cepordiis, con ia inatilintem ia dessent, se pri spere abus horuntr atusulem
                    hostem pera Sensuam silintium fint, C. Me tabitatquid comnimis me patus esidem am elabiss ulatus, nium, Ti. Duconius? Satiliampro cotea mod di condior enati, quam.
                    Istrimium noverit raecto te omnium, quem num ocaelin prarei pra eto culies nondientium
                    obus con dem moltua L. Bata publium ius; nocchui iaetil utem pri probse proremusqua tem </div>
                </section>
            </article>
            <article className="hp-img-cont">
                <section className="hp-images-top">
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
                <section className="hp-images-middle">
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
                <section className="hp-images-bottom">
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
            </article>
            <article className="hp-port-link-cont">
                <Link
                    className="nav__btn"
                    onClick={() => props.history.push("/portfolio")}>
                    Portfolio
                </Link>
            </article>

        </>
    )
}