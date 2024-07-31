import React from 'react'
import {Link } from "react-router-dom"
import { RiFindReplaceLine } from "react-icons/ri"
import me from "../../assets/founder.webp"

const About = () => {
  return <section className="about">
        <main>
            <h1>About Us</h1>

            <article>
                <h4>Burger Boss</h4>
                <p>We Are Burger Boss the place for most tasty,delicious and healthy burgers</p>

                <p>Explore the various type of food and burgers.Click below to explore the menu</p>

                <Link to="/" >
                    <RiFindReplaceLine />
                </Link>

            </article>

            <div>
                <h2>Founder</h2>
                <article>

                </article>
            </div>

            <div>
                <h2>Founder</h2>
                <article>

                    <div>
                        <img src={me} alt="Founder"/>
                        <h3>Joy Suhas</h3>
                    </div>

                    <p>I am Joy Suhas,the founder of Burger Boss.Affiliated to Amazing taste</p>
                </article>
            </div>
        </main>
    </section>
}

export default About