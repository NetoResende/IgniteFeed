

import { Avatar } from './Avatar'
import { Coment } from './Coment'
import style from './Poste.module.css'

export function Poste({ author, content}){

    const { avatarUrl, nome, cargo} = author;

    
  return(
   
     <article className={style.poste}>
          <header>
              <div className={style.author}>

                  <Avatar src={avatarUrl} />

                  <div className={style.authorInfo}>
                      <strong>{nome}</strong>
                      <span>{cargo}</span>
                  </div>

              </div>

              <time title='21 de junho 2024 ás 20:19' dateTime="19-06-2024 as 16:05">
                Publcado á 1h
                </time>
          </header>

          <div className={style.content}>
            {content.map((line) => {
                if(line.type === 'paragrafo'){
                    return <p key={line.index}>{line.content}</p>
                }else if ( line.type === 'link'){
                    return <p key={line.index}><a href="#">{line.content}</a></p>
                }
            })}
          </div>

        <form className={style.comentForm}>
            <strong>Deixe seu cometário</strong>

            <textarea 
               placeholder='Deixe um cometário'
            />

           <footer>
               <button type='submit'> Publicar</button>
           </footer>
        </form>

        <div className={style.comentList}>
          <Coment/>
          <Coment/>
          <Coment/>
        </div>
        
     </article>
    
  )
}