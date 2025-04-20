import Header from "./components/header"
import Projects from "./components/projects"
import AboutMe from "./components/aboutMe"
import Learning from "./components/learning"
import { useState } from "react"
import ContactModal from "./components/modal"
import Footer from "./components/footer"
import LanguageProvider  from "./context/lenguajeProvider"


function App() {
const [openModal, setOpenModal] = useState(false)



  return (
    <div>
        <LanguageProvider>
          <Header setOpenModal={setOpenModal} />
          {openModal ? <ContactModal setOpenModal={setOpenModal} openModal={openModal} /> : ''}
          <Projects/>
          <AboutMe/>.
          <Learning/>
          <Footer setOpenModal={setOpenModal}/>
        </LanguageProvider>
    </div>
  )
}

export default App
