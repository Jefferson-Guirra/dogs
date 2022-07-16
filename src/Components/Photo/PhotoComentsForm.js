import React from 'react'
import { COMMENT_POST } from '../../api'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoComentsForm = ({id,setComments,single}) => {
  const {request, error}=useFetch()
  const [comment,setComment] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    const {url,options} = COMMENT_POST(id,{comment})
    const {json, response} = await request(url,options)
    if(response.ok) {
      setComments((comments)=>[...comments,json])
      setComment('')
    }

  
  }
  

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea 
      id='comment'
      name='comment'
      placeholder='Comente...'
      value={comment} 
      onChange={({target})=>setComment(target.value)} 
      className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoComentsForm