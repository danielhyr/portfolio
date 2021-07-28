import React from 'react'
import Header from '../subcomponents/Header/Header'
import './MainPage.scss'

function MainPage() {
    return (
        <main className="main">
            <section className="text">
                <Header />
                <div className="text-description">
                    <h2 className="text__header">Hi, my name is <span className="text__header-span">Dan.</span></h2>
                    <h3 className="text__headersmall"><span  className="text__headersmall-span">A Developer:</span></h3>
                </div>
            </section>
            <section className="animation">
                <ul class="animation-box">
                    <li class="animation-box__li">Node.js</li>
                    <li class="animation-box__li">SQL</li>
                    <li class="animation-box__li">MongoDB</li>
                    <li class="animation-box__li">Socket.io</li>
                    <li class="animation-box__li">Express</li>
                    <li class="animation-box__li">SASS</li>
                    <li class="animation-box__li">CSS</li>
                    <li class="animation-box__li">JavaScript</li>
                    <li class="animation-box__li">React.JS</li>

                </ul>
            </section>
        </main>
    )
}

export default MainPage
