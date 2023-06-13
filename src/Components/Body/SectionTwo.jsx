import { imageDevices } from "../../images/Load"

function SectionTwo() {
  return (
    <section className="w-full flex flex-col mt-32">
        
        <article className="text-center">
            <h2>Access Clipboard anywhere</h2>
            <blockquote className="paragraph">
                Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
            </blockquote>
        </article>

        <img src={imageDevices} alt="Image Devices" className="w-[70%] m-auto" />
        
        <article className="text-center">
            <h2>Supercharge your workflow</h2>
            <blockquote className="paragraph">We’ve got the tools to boost your productivity.</blockquote>
        </article>

    </section>
  )
}

export default SectionTwo