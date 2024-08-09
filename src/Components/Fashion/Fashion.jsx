import background from '../../assets/background.svg'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow.svg'

import './Fashion.css'

function Fashion() {
    return (
        <div id='Fashiondiv'>
            <div id='logo-div'>
                <img src={logo} />
            </div>
            <div id='text-div'>
                <h1><span>WE'RE</span> COMING SOON</h1>
                <p>Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <div id='buttons-div'>
                    <input type='email' placeholder='Email Address' />
                    <button id='sendbttn'>
                        <img src={arrow} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Fashion