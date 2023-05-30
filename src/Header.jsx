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
            <blockquote className="paragraph text-center">
                Clipboard allows you to track and organize everything you copy. Instantly <br />
                access your clipboard on all your devices.
            </blockquote>
            <div className="w-full flex justify-center gap-2">
              <button className="btn btn-primary">Download for iOS</button>
              <button className="btn btn-secondary">Download for Mac</button>
            </div>
        </section>
        
    </header>
  )
}

export default Header