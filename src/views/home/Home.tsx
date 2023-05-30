import './home.scss'
import {
    Header
} from '../../components/_index'


const Home = () => {
    return (
        <main className='home_page'>
            <Header/>

            <section className='hero-section'>
                <div className="left-side">
                    <img 
                        src="/src/assets/pzs-can-old@3x.png" 
                        alt="" 
                    />
                </div>
                <div className="right-side">
                    <img 
                        src="/src/assets/apple-music-lockup-small-desktop.svg" 
                        alt="" 
                    />

                    <div className='control-action'>
                        <button className='action-btn'>
                            get it now!
                        </button>

                        <p>
                        Ends 09/17/23. Age restrictions apply, US/DC/Guam/PR. Limit 1 per person. New & qualified returning subscribers only. $10.99/month after trial until cancelled. Rules & Terms at pressplayonsummer.com.
                        </p>
                    </div>
                </div>
            </section>

            <section className="second-section">
                <div className="left-side">
                    <div className="img-container">
                        <img src="/src/assets/new-improved-taste.svg" alt="#" />
                        <img src="/src/assets/pzs-can-nobug-desktop.png" alt="#" />
                    </div>
                </div>
                <div className="right-side">
                    <div className='right-side-container'>
                        <img src="/src/assets/headline.svg" alt="#" />

                        <img src="/src/assets/try-it-to-believe-it.svg" alt="#" />

                        <div className="thumbnails">
                            <div className="thumbnail-one">
                                <img src="/src/assets/gagt_steve.png" alt="#" />
                            </div>
                            <div className="thumbnail-two">
                                <img src="/src/assets/gagt_ben.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='third-section'>
                <div className="left-side">

                </div>

                <div className="right-side">
                    
                </div>
            </section>
        </main>
    )
}

export default Home