import { imageComputer } from "../../images/Load"

function SectionOne() {
  return (
    <section className="w-full text-center">

        <h2>Keep track of your snippets</h2>
        <blockquote className="paragraph">
            Clipboard instantly stores any item you copy in the cloud, 
            meaning you can access <br /> your snippets immediately on all your 
            devices. Our Mac and iOS apps will help you <br /> organize everything. 
        </blockquote>

        <article className="flex flex-col lg:flex-row">

            <img src={imageComputer} alt="Image Computer" className="object-contain lg:-translate-x-7" />

            <article className="flex flex-col gap-y-20 p-10 lg:text-left">
                <div>
                    <h3>Quick Search</h3>
                    <blockquote className="font-BaiJamjuree text-grayish-blue">                    
                        Easily search your snippets by content,<br /> category, web address, application, and more.
                    </blockquote>
                </div>

                <div>
                    <h3>iCloud Sync</h3>
                    <blockquote className="font-BaiJamjuree text-grayish-blue">Instantly saves and syncs snippets across all <br /> your devices.</blockquote>            
                </div>

                <div>
                    <h3>Complete History</h3>
                    <blockquote className="font-BaiJamjuree text-grayish-blue">Retrieve any snippets from the first moment <br /> you started using the app.</blockquote>
                </div>
            </article>

        </article>
    </section>
  )
}

export default SectionOne