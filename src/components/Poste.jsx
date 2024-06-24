
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar'
import { Coment } from './Coment'
import style from './Poste.module.css'

export function Poste({ author, content, publishedAt}){

    const { avatarUrl, nome, cargo} = author;

    const [ coment, setComent ] = useState([1])

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedAtDateFormattedToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })




    function handlerComent(event){
        event.preventDefault()

        setComent([...coment, coment.length + 1])
    }
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

              <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                   {publishedAtDateFormattedToNow}
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

        <form onSubmit={handlerComent} className={style.comentForm}>
            <strong>Deixe seu cometário</strong>

            <textarea 
               placeholder='Deixe um cometário'
            />

           <footer>
               <button type='submit'> Publicar</button>
           </footer>
        </form>

        <div className={style.comentList}>
         { coment.map(coment => {
            return <Coment key={coment.index}/>
         })}
        </div>
        
     </article>
    
  )
}