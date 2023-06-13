import { logoGoogle,logoHp,logoIbm,logoMicrosoft,logoVector } from "../../images/Load"



function SectionBrands() {
  return (
    <>
    <section className="section-brand">
        <img src={logoGoogle} alt="Logo Google" />
        <img src={logoIbm} alt="Logo IBM" />
        <img src={logoMicrosoft} alt="Logo Microsoft" />
        <img src={logoHp} alt="Logo Hewlett PAckard" />
        <img src={logoVector} alt="Logo Vector Graphics" />
    </section>
    </>
  )
}

export default SectionBrands