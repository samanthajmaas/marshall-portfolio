import React from "react"
import { Link } from "react-router-dom"
import Hexagon from 'react-hexagon'
import "./About.css"
import Img6 from "../imgs/wine-6.jpg"

export const About = (props) => {
    return (
        <>
            <article className="ab-header-cont">
                <section className="ab-header">
                    <h1 className="about-me">ABOUT ME</h1>
                </section>
            </article>
            <article className="ab-main-cont">
                <article className="ab-left">
                    <article className="ab-img-cont">
                        <section className="ab-large-img">
                            <Hexagon
                                className="big-hex"
                                style={{
                                    stroke: "white",
                                }}
                                backgroundImage={Img6}
                                backgroundScale="1.05"
                                href=""
                            />
                        </section>
                        <section className="ab-2-left-imgs">
                            <Hexagon
                                className="hex hex-1"
                                style={{
                                    stroke: "white",
                                }}
                                backgroundImage={Img6}
                                backgroundScale="1.05"
                                href=""
                            />
                            <Hexagon
                                className="hex hex-2"
                                style={{
                                    stroke: "white",
                                }}
                                backgroundImage={Img6}
                                backgroundScale="1.05"
                                href=""
                            />

                        </section>
                        <section className="ab-2-right-imgs">
                            <Hexagon
                                className="hex hex-3"
                                style={{
                                    stroke: "white",
                                }}
                                backgroundImage={Img6}
                                backgroundScale="1.05"
                                href=""
                            />
                            <Hexagon
                                className="hex hex-4"
                                style={{
                                    stroke: "white",
                                }}
                                backgroundImage={Img6}
                                backgroundScale="1.05"
                                href=""
                            />

                        </section>
                    </article>
                </article>


                <article className="ab-right">
                    <article className="ab-name-cont">
                        <section className="ab-name">
                            <h2>MARSHALL BLEVINS</h2>
                        </section>
                        <section className="ab-name-title">
                            <div className="ab-title">
                                Neightborhood designer, journalist & wine lover
                    </div>
                        </section>
                    </article>
                    <article className="ab-desc-cont">
                        <section className="ab-desc">
                            <div className="ab-para">
                                It fugitia nisci omnis moluptatis id maxime venim ipsum
                                sum reprem que nullorere, sed enis aut rest, quo inus dolor
                                autem eiur? Acculla utatio estrum rectionseque si blantis ipsant quiberfereic te exerumquis eic tendere volestotate dolorror alisi bearum sition exero blaborrum repelitas re venis dus
                                apienis natet quatur aut aspel magnitat.
                                Bor magniam res comnien danisci dendae enis solorest, nit
                                hic tectiorem reptam vition consed erum et eati iliquo mossimus sintur?
                                Hicius ea dipsaped quae. Dem nia volorrorem namet, que
                                plaboratas autem ium quam eos untiorit et voluptum, cum
                                ipsanto cullaborias cuptis venderum fugiatur, quunti
                                ipsam aliquid quo eaquasi niamus velique ma nos
                                ad ex escidis quam, omnist quae. Et rem in net lant,
                                quibus most, sit este nonet, es dignimusam ero et
                                incipiendi to ex eligendist eum eum denecte late ex
                                es et aut laut prae occusam eos autesti doluptat eseri
                                acepele ndipisquatem incti aute cones eati consecus,
                                quuntiisque simus et premperio. Neque pres aliat modions equasperibus nulles delit ut dolupta demquis quaspel ex
                                ento omnim earibus tiatet andercillest harit explabo. Nequam,
                                is min prero ma veliqui cus, tessitatur, cus, natem aliqui ratem
                        </div>
                        </section>
                    </article>
                </article>
            </article>
        </>
    )
}