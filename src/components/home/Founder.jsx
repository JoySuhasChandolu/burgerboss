import React from 'react';
import { motion } from "framer-motion";
import me from "../../assets/founder.webp"

const Founder = () => {

const options = {
    initial:{
        x:"-100%",
        opacity:0,
    },
    whileInView:{
        x:0,
        opacity:1,
    },
}

  return (
    <section className="founder">
        <motion.div
        {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Joy Suhas</h3>

            <p>Hey,Everyone I am Joy Suhas,The founder of Burger Boss
                <br />
                Our aim is to create the most tasty Burger on the planet
            </p>
        </motion.div>
    </section>
  )
}

export default Founder