export default function Footer() {
    return (
        <div className="mt-5 py-4" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--light-text)' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold mb-3" style={{ color: 'var(--secondary-color)' }}>
                            CONTACT INFO
                        </h3>
                        <div className="mb-2">
                            <strong>Location:</strong>
                            <p>Your address goes here</p>
                        </div>
                        <div className="mb-2">
                            <strong>Call Us Now:</strong>
                            <p>0123456789</p>
                            <p>0123456789</p>
                        </div>
                        <div className="mb-2">
                            <strong>Email:</strong>
                            <p>demo@example.com</p>
                            <p>demo@example.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.98028689061!2d72.49748647400855!3d23.243804408038535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bcaaaf3bc99%3A0x2d66a9d14514a982!2sPrinsi%20Dresses!5e0!3m2!1sen!2sin!4v1711736261463!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '10px' }}
                            allowFullScreen
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
