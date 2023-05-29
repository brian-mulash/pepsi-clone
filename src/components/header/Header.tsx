import './header.scss'


const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <img 
                    src="/src/assets/logo-large.png" 
                    alt="logo" 
                />

                <nav>
                    <span>view products</span>
                    <span>what's new</span>
                    <span>newsletter</span>
                    <span>contact us</span>
                </nav>
            </div>

            <button className='navbar-btn'>
                buy pepsi products
            </button>
        </header>
    )
}

export default Header
