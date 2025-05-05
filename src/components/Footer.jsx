import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Quecia Mae R. Brilliantes</h3>
            <p className="footer-description">
              An aspiring front-end developer and graphic designer from Western Mindanao State
              University.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/quecia.mae.brilliantes" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com/queciabrilliantes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/kisha_brill/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:qb202100795@wmsu.edu.ph" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/keshabrill/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

      

        
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Keshabrill. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>  
        </div>
      </div>
    </footer>
  )
}

export default Footer
