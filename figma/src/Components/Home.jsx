import React from 'react'
import Styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={Styles.parent}>
            <div className={Styles.container}>
                <div className={Styles.nav}>
                    <div>
                        <h1>travelraja</h1>
                    </div>

                    <div className={Styles.navmenu}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>ID</h3>
                    </div>
                </div>

                <div className={Styles.mainsearch}>
                    <div>
                        <h1>Explore the world with a smile</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sequi, nam itaque ad voluptatibus aliquid odit quo reprehenderit provident dolores necessitatibus doloribus eum blanditiis, vitae voluptas alias dolor. Nemo, omnis.</p>
                    </div>

                    <div className={Styles.searching}>
                        <img src="equilateral.svg" alt="triangle with all three sides equal"
                            height="87"
                            width="100" />
                        <input type="text" />
                        <input type="date" />
                        <input type="text" />

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home
