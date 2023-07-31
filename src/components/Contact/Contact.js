import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact'>
            <h1>
                Get in Touch with Us
            </h1>
            <p>
                Elevate Your Institute Management and Student Success - Contact Us Now!
            </p>
            <div className='contact-div'>
                <div className='contact-div-left'>
                    <div>
                        <h2>Contact Us</h2>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                        <form>
                            <label>Name</label>
                            <input type="text" placeholder='Doe'/>

                            <label>Email</label>
                            <input type="text" placeholder='Email'/>

                            <label>Message</label>
                            <textarea rows={4} columns={10}>
                                Write your message here.
                            </textarea>
                        </form>
                    </div>
                </div>  
                <div className='contact-div-right'>

                </div>
            </div>
            <div className='side-div'>
                <h1>Contact Information</h1>
            </div>
        </div>
    </div>

  )
}

export default Contact