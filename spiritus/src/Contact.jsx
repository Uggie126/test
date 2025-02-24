import React from "react";
import "./Contact.css"

const Contact = React.forwardRef((props,ref) => {
    return (
        <footer ref={ref} className="contact-section">
            <p><a href="tel:+37060013070">+37060013070</a></p>
            <p><a href="mailto:info@spiritus.lt">info@spiritus.lt</a></p>
            <p>Aušros Vartų g. 4</p>
        </footer>
    )

});

export default Contact;