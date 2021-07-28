import React from 'react'
import Header from '../subcomponents/Header/Header'
import './PortfolioPage.scss'
import Carousel from 'react-elastic-carousel'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1268, itemsToShow: 4 },

]


function PortfolioPage() {
    return (
        <main className="portfolio">
            <section className="ptext">
                <Header />
                <div className="ptext-description">
                    <h1 className="ptext__header"> <span className="ptext__header-span">This is my </span>Portfolio</h1>
                    <div className="ptext-box">
                        <Carousel
                            easing="cubic-bezier(1,.15,.55,1.1)"
                            breakPoints={breakPoints} focusOnSelect={true}>
                            <div className="ptext-box__card">
                                <p>Bandsite</p>
                                <p>Description</p>
                            </div>
                            <div className="ptext-box__card">
                                <p>Brainflix</p>
                                <p>Description</p>

                            </div>
                            <div className="ptext-box__card">
                                <p>Instock</p>
                                <p>Description</p>

                            </div>
                            <div className="ptext-box__card">
                                <p>Standups</p>
                                <p>Description</p>

                            </div>
                            <div className="ptext-box__card">
                                <p>Safer</p>
                                <p>Description</p>

                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="animation">

            </section>
        </main>
    )
}

export default PortfolioPage
