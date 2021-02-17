import React, { useState } from "react"
import { Link } from "react-router-dom"
import Hexagon from 'react-hexagon'
import "./Portfolio.css"
import Img6 from "../imgs/wine-6.jpg"
import Img5 from "../imgs/wine-5.jpg"
import Img4 from "../imgs/wine-4.jpg"
import ImageGallery from 'react-image-gallery';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export const Portfolio = (props) => {

    const [isSocialOpen, setIsSocialOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isPeaceOpen, setIsPeaceOpen ] = useState(false);
    const [index, setIndex] = useState(0)

    const toggleSocialChange = () => (isSocialOpen ? setIsSocialOpen(false) : setIsSocialOpen(true))
    const toggleInfoChange = () => (isInfoOpen ? setIsInfoOpen(false) : setIsInfoOpen(true))
    const togglePeaceOpen = () => (isPeaceOpen ? setIsPeaceOpen(false) : setIsPeaceOpen(true))

    const SocialImagesScroll = [
        {
            original: Img6,
            thumbnail: Img6,
        },
        {
            original: Img5,
            thumbnail: Img5,
        },
        {
            original: Img4,
            thumbnail: Img4,
        },
    ];

    const InfoImagesScroll = [
        {
            original: Img6,
            thumbnail: Img6,
        },
        {
            original: Img5,
            thumbnail: Img5,
        },
        {
            original: Img4,
            thumbnail: Img4,
        },
    ];

    const PeaceImgsScroll = [
        {
            original: Img6,
            thumbnail: Img6,
        },
        {
            original: Img5,
            thumbnail: Img5,
        },
        {
            original: Img4,
            thumbnail: Img4,
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
            <Modal isOpen={isSocialOpen} toggle={toggleSocialChange}>
                <ModalHeader toggle={toggleSocialChange}>Images</ModalHeader>
                <ModalBody>
                    <ImageGallery items={SocialImagesScroll} showFullscreenButton={false} showPlayButton={false} startIndex={index} />
                </ModalBody>
            </Modal>
            <article className="port-social-imgs-cont">
                <section className="port-social-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        onClick={() => {
                            toggleSocialChange();
                            setIndex(0)
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
                        backgroundImage={Img5}
                        onClick={() => {
                            toggleSocialChange();
                            setIndex(1)
                        }}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img4}
                        onClick={() => {
                            toggleSocialChange();
                            setIndex(2)
                        }}
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
            <Modal isOpen={isInfoOpen} toggle={toggleInfoChange}>
                <ModalHeader toggle={toggleInfoChange}>Images</ModalHeader>
                <ModalBody>
                    <ImageGallery items={InfoImagesScroll} showFullscreenButton={false} showPlayButton={false} startIndex={index} />
                </ModalBody>
            </Modal>

            <article className="port-info-imgs-cont">
                <section className="port-info-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        onClick={() => {
                            toggleInfoChange();
                            setIndex(0)
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
                        backgroundImage={Img5}
                        onClick={() => {
                            toggleInfoChange();
                            setIndex(1)
                        }}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img4}
                        onClick={() => {
                            toggleInfoChange();
                            setIndex(2)
                        }}
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

            <Modal isOpen={isPeaceOpen} toggle={togglePeaceOpen}>
                <ModalHeader toggle={togglePeaceOpen}>Images</ModalHeader>
                <ModalBody>
                    <ImageGallery items={PeaceImgsScroll} showFullscreenButton={false} showPlayButton={false} startIndex={index} />
                </ModalBody>
            </Modal>
            <article className="port-corps-imgs-cont">
                <section className="port-corps-imgs-top">
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        onClick={() => {
                            togglePeaceOpen();
                            setIndex(0)
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
                        backgroundImage={Img5}
                        onClick={() => {
                            togglePeaceOpen();
                            setIndex(1)
                        }}
                        backgroundScale="1.05"
                        href=""
                    />
                    <Hexagon
                        className="hex"
                        style={{
                            stroke: "white",
                        }}
                        backgroundImage={Img4}
                        onClick={() => {
                            togglePeaceOpen();
                            setIndex(2)
                        }}
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
        </>
    )
}