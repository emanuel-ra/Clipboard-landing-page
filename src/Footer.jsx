import Logo from "./Components/Logo"
import { iconFb,iconInstagram,iconTwitter,iconLogo } from "./images/Load"


function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="p-5 flex justify-center">
          <img src={iconLogo} alt="Footer Logo" className="w-16" />
        </section>
        <section className="footer-links">          
          <a href="" className="block">FAQs</a>
          <a href="" className="block">Privacy Policy</a>
          <a href="" className="block">Install Guide</a>
          <a href="" className="block">Contact Us</a>
          <a href="" className="block">Press Kit</a>
        </section>
        <section className="footer-social-links">
          <a href="">
            <img src={iconFb} alt="" />
          </a>
          <a href="">
            <img src={iconInstagram} alt="" />
          </a>
          <a href="">
            <img src={iconTwitter} alt="" />
          </a>
        </section>
      </footer>
    </>
  )
}

export default Footer