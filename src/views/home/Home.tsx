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

            </section>
        </main>
    )
}

export default Home