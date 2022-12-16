import { Header } from "../components/Header"
import sobreImg from "../assets/sobre.svg"

export function Sobre() {
    return(
        <>
        <Header text= "Essa sou eu!" image={sobreImg} />
        </>
    )
}