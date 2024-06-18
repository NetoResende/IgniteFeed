import { Poste } from "./Poste.jsx"
import { Header } from "./components/Header.jsx"



import './global.css'


export function App() {
  
  return (
    <div>
       <Header/>
        <aside>
          <Poste 
            author="Raimundo Gomes Resende Neto"
            content="Lorem ipsum do nulla obcaecati maxime quas aliquam nemo, nisi beatae laudantium est qui voluptate pariatur ipsam architecto consectetur minus?"
          />
          <Poste 
            author="José de Arimateia Dias Resende"
            content="Lepellat tae laudantium est qui voluptate pariatur ipsam architecto consectetur minus?"
          />
        </aside>
      
    </div>
  )
}


