import { headerDesktop, headerMobile } from "./images/Load.js"
import Logo from "./Components/Logo"
function Header() {
  return (
    <header className={`header`}>
     
        <picture>
            <source media="(max-width: 375px)" srcSet={headerMobile} />
            <img src={headerDesktop} alt="Header Desktop" />
        </picture>
        <section className="flex flex-col items-center absolute bottom-0">
            <Logo />
            <h1>A history of everything you copy</h1>
            <blockquote>
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
            </blockquote>
            <button>Download for iOS</button>
            <button>Download for Mac</button>
        </section>
    </header>
  )
}

export default Header