import { Poste } from "./Poste.jsx"
import { Header } from "./components/Header.jsx"


import style from './App.module.css'
import './global.css'
import { SideBar } from "./components/SideBar.jsx"


export function App() {
  
  return (
    <div>
       <Header/>
        <div className={style.wrapper}>
            <SideBar/>
            <main>
              <Poste 
                author="Raimundo Gomes Resende Neto"
                content="Lorem ipsum do nulla obcaecati maxime quas aliquam nemo, nisi beatae laudantium est qui voluptate pariatur ipsam architecto consectetur minus?"
              />
              <Poste 
                author="José de Arimateia Dias Resende"
                content="Lepellat tae laudantium est qui voluptate pariatur ipsam architecto consectetur minus?"
              />
            </main>
        </div>
    </div>
  )
}


