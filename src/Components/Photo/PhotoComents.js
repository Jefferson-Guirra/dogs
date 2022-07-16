import React from 'react'
import {UserContext} from '../../UserContext'
import PhotoComentsForm from './PhotoComentsForm'
import styles from  './PhotoComments.module.css'
const PhotoComents = (props) => {
  const [comments, setComments] = React.useState(()=>props.comments)
  const { login } = React.useContext(UserContext)
  const commentsSection = React.useRef(null)

  React.useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  },[comments])
  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}` }>
        {comments.map(comment=><li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoComentsForm single={props.single} setComments={setComments} id={props.id} />}
    </>
  )
}

export default PhotoComents