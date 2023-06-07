import { iconBlacklist, iconText, iconPreview } from "../../images/Load"



function SectionThree() {
  return (
    <>
        <section className="flex flex-col gap-10 lg:flex-row px-10">
            <article className="flex flex-col w-1/3">
                <img src={iconBlacklist} alt="" className="h-auto max-w-full"/>
                <h3>Create blacklists</h3>
                <blockquote>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</blockquote>
            </article>

            <article className="flex flex-col w-1/3">
                <img src={iconText} alt="" className="h-auto max-w-full"/>
                <h3>Plain text snippets</h3>
                <blockquote>Remove unwanted formatting from copied text for a consistent look.</blockquote>
            </article>

            <article className="flex flex-col w-1/3">
                <img src={iconPreview} alt="" className="h-auto max-w-full"/>
                <h3>Sneak preview</h3>
                <blockquote>Quick preview of all snippets on your Clipboard for easy access.</blockquote>
            </article>
            
        </section>
    </>
  )
}

export default SectionThree