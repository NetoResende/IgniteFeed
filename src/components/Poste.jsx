import style from './Poste.module.css'

export function Poste(){
  return(
   
     <article className={style.poste}>
          <header>
              <div className={style.author}>

                  <img
                    className={style.avatar}
                  src="https://images.unsplash.com/photo-1718465388901-9c628510c01e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  />

                  <div className={style.authorInfo}>
                      <strong>Neto Resende</strong>
                      <span>Web Developer</span>
                  </div>

              </div>

              <time title='19 de junho de 2024 as 16:05' dateTime="19-06-2024 as 16:05">Publicado há 1h</time>
          </header>

          <div className={style.content}>
              <p> Fala galera! 🤩</p>
              <p> Acabei de aprender como utilizar </p>
              <p> ReactJS e agora estou ansioso para mostrar meu novo trabalho em react com type script !</p>
              <p> <a href="#">Jane.design/doctorcare</a> </p>
              <p> 
                <a href="#">#novoprojeto </a>{' '}
                <a href="#">#nlw </a>{' '}
                <a href="#">#rocketseat</a>
              </p>
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
        
     </article>
    
  )
}