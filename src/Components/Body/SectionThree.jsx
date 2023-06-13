import { iconBlacklist, iconText, iconPreview } from "../../images/Load"



function SectionThree() {
  return (
    <>
        <section className="flex flex-col items-center gap-10 lg:flex-row px-10 mt-5">
            <article className="flex flex-col items-center text-center lg:w-1/3 gap-2">
                <img src={iconBlacklist} alt="" className="w-10"/>
                <h3>Create blacklists</h3>
                <blockquote className="paragraph">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</blockquote>
            </article>

            <article className="flex flex-col items-center text-center lg:w-1/3 gap-2">
                <img src={iconText} alt="" className="w-10"/>
                <h3>Plain text snippets</h3>
                <blockquote className="paragraph">Remove unwanted formatting from copied text for a consistent look.</blockquote>
            </article>

            <article className="flex flex-col items-center text-center lg:w-1/3 gap-2">
                <img src={iconPreview} alt="" className="w-10"/>
                <h3>Sneak preview</h3>
                <blockquote className="paragraph">Quick preview of all snippets on your Clipboard for easy access.</blockquote>
            </article>
            
        </section>
    </>
  )
}

export default SectionThree