import { Navbar } from "../Navbar/Navbar"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout  =({children})=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <main>
            {children}
            </main>
            <Footer/>
        </div>
    )
}