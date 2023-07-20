import '../App.css'
import  resume from '../media/AndrusResume2023.pdf'

export default function Contact() {
    return (
        <div className="contactPage" id="contact">
            <div className='contact-card-container'>
                <h3>Action Card</h3>
                <hr className='card-divider' />
                <p>Play to view Resume</p>
                <br />
                <br />
                <form method="get" action={resume}>
                    <button className="contact-download-resume-button" type="submit">Click to View Resume</button>
                </form>
            </div>
            {/* <div className='contact-message'>
                <h3>Send me a message</h3>
                <form>
                    <input>
                    
                    </input>
                </form>
                <button>send</button>
            </div> 
            
            Tessssst
            */}
        </div>
    );
}
