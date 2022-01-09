import { useState } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faMapMarker, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com'

import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        if (name && email && message) {
            const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
            const userId = process.env.NEXT_PUBLIC_USER_ID;
            emailjs.init(userId);
            const templateParams = {
                from_name: name,
                reply_to: email,
                message: message
            };
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            alert('Thank you for your message, we will be in touch in no time!');
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className={styles.contact} id="contact">
            <div className={styles.heading}>
                Contact Me
            </div>
            <div className={styles.body}>
                <div className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input className={styles.input} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <textarea className={styles.input} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button className={styles.submit} onClick={submit}>Send Message<FontAwesomeIcon icon={faPaperPlane} className={styles.submitIcon}/></button>
                </div>
                <div className={styles.static}>
                    <p>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon}/> srinjoyray123@gmail.com
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMapMarker} className={styles.icon}/> Kolkata, India
                    </p>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/srinjoy-ray-874b031b6" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        </a>
                        <a href="https://github.com/srinjoyray" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                        </a>
                        <a href="mailto:srinjoyray123@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon}/>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
