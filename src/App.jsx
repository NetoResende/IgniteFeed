import { Poste } from "./components/Poste.jsx"
import { Header } from "./components/Header.jsx"
import { SideBar } from "./components/SideBar.jsx"

import style from './App.module.css'
import './global.css'


const postar = [
        {
          id: 1,
          author: {
                    avatarUrl: "https://github.com/raimundoneto01.png" ,
                    nome: "Neto Resende",
                    cargo: "Web Developer"
                },
          content: [
                    { type: 'paragrafo', content: "Fala galera! "},
                    { type: 'paragrafo', content: 'Acabei de aprender como utilizar'},
                    { type:'paragrafo', content: "ReactJS e agora estou ansioso para mostrar meu novo trabalho em react com type script"},
                    { type: 'link', content: 'Jane.design/doctorcare'},
                    { type: 'link', content: 'Marcely.design/doctorcare'},
                ],
   publishedAt: new Date('06-06-2024 15:48:00'),
   },
];


export function App() {
  
  return (
    <div>
       <Header/>
        <div className={style.wrapper}>
            <SideBar/>
            <main>
              { postar.map((post)=>{
                return (                 
                    <div key={post.id}>
                         <Poste 
                          author={post.author}
                          content={post.content}
                          publishedAt={post.publishedAt}
                       />
                         <Poste 
                          author={post.author}
                          content={post.content}
                          publishedAt={post.publishedAt}
                       />
                    </div>
                )
              })}
            </main>
        </div>
    </div>
  )
}


