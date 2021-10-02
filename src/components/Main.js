
import { Container } from "react-bootstrap"
import em1 from '../assets/em1.jpg'
import em2 from '../assets/em2.jpg'

export default function Main() {
  return (
      <Container className="photos">
    <div>
        <div className="main">
        <img  className="image-fluid" src={em1} alt="Logo" height='600px' />
        <h2 className="textmainpage"><span>Emily Morgenbesser<br/>Software Engineer</span></h2><br/>
        </div>

        <div className="main">
        <img className="image-fluid" src={em2} alt="Logo" height='600px' />
        <div>
        <h2 className="textmainpage2"><span>Emily Morgenbesser<br/>Software Engineer</span></h2><br/>
       </div>

       </div>
    
</div>
</Container>

  )
}
