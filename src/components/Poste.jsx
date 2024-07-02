
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar'
import { Coment } from './Coment'

import style from './Poste.module.css'


export function Poste({ author, content, publishedAt}){
    const { avatarUrl, nome, cargo} = author;
    const [ coment, setComent ] = useState([]);
    const [ newComents, setNewComents ] = useState('')
   

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedAtDateFormattedToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    function handlerComent(event){
        event.preventDefault()
        const newComents = event.target.comentar.value
        setComent([...coment, newComents])
        setNewComents("")
    }
    function handlerNewComents(event){
        event.target.setCustomValidity("")
        setNewComents(event.target.value)
    }
    function handlerInvalid(event){
        event.target.setCustomValidity("Campo Obrigatório")
    }
    function deletarComents(deletList){
        const deletarComentario = coment.filter(coment => {
            return coment !== deletList;
        });
        setComent(deletarComentario);
    }
    const isDisableValue = newComents.length === 0
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
                        name='comentar'
                        value={newComents}
                        onChange={handlerNewComents}
                        placeholder='comentar....' 
                        onInvalid={handlerInvalid}
                        required
                        />
             <footer>
                <button type='submit' disabled={isDisableValue}> Publicar</button>
           </footer>
        </form>
        <div className={style.comentList}>
                { coment.map(coment => {
                    return (
                        <Coment
                            key={coment} 
                            cometar={coment} 
                            ondeletarComents={deletarComents}
                        />)
                })}
        </div>
     </article>
    
  )
}