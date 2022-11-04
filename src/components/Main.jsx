import Carrousel from "./Carrousel"
import Footer from "./Footer"
import Marketing from "./Marketing"

const Main = () => {
   return (
      <main>
         <Carrousel/>
         <Marketing/>
         <Footer text="Back to top" text2="2017-2020 Company, Inc." text3="Privacy" text4="Terms"/>
      </main>
   )
}

export default Main