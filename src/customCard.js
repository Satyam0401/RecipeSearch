 import {Card,Button} from "react-bootstrap"   
    
    const CustomCard=()=>{
return<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1663011249137-9e536d26e6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    }

    export default CustomCard