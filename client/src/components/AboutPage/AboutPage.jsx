import React from 'react'
import Header from '../subcomponents/Header/Header'
import './AboutPage.scss'

function AboutPage() {
    return (
        <main className="about">
        <section className="ptext">
            <Header />
            <div className="ptext-description">
                <h1 className="ptext__header"> <span className="ptext__header-span">About </span>Me</h1>
                <div className="ptext-box">
                  
                </div>
            </div>
        </section>
        <section className="animation">

        </section>
    </main>
    )
}

export default AboutPage
