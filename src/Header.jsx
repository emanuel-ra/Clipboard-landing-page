import { headerDesktop, headerMobile } from "./images/Load.js"
import Logo from "./Components/Logo"
function Header() {
  return (
    <header className={`header `}>
            
        <picture className="absolute right-0 top-0 left-0">
            <source media="(max-width: 375px)" srcSet={headerMobile} />
            <source media="(max-width: 1440px)" srcSet={headerDesktop} />
            <img src={headerDesktop} className="h-auto max-w-full" alt="Header Desktop" />
        </picture> 

        <section className="flex flex-col items-center">
            <Logo />

            <h1>A history of everything you copy</h1>
            
            <blockquote className="paragraph text-center">
                Clipboard allows you to track and organize everything you copy. Instantly 
                access your clipboard on all your devices.
            </blockquote>

            <div className="w-full flex flex-col px-5 md:px-2 md:flex-row justify-center gap-2">
              <button className="btn btn-primary">Download for iOS</button>
              <button className="btn btn-secondary">Download for Mac</button>
            </div>

        </section>
        
    </header>
  )
}

export default Header