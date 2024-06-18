export const metadata = {
  title:"PokeNext",
  description:"Page layout",
  
};

import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";


export default function Layout({children}) {
  return (
    <html lang="pt-br">
      <body>
            <Navbar/>
            <main className="main-container">{children}</main>
            <Footer/>
      </body>
    </html>
  )
}