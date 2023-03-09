import { useState } from "react"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import CustomCard from "./customCard";


const App=()=>{
  const [title,setTitle] = useState('Test Title')
console.log("hyy")

return <Container>
<Row>
  <Col sm = {6}>
  <CustomCard/>
  </Col>
  <Col sm = {6}>
    <CustomCard/>
    </Col>   
  </Row>
  </Container>
}
export default App;
