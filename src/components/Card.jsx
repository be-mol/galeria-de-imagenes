import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
        <div className="carta">
            <Card style={{ width: '20rem' }}>
                <Card.Img src={props.image} />
                <Card.Body>
                    <Card.Title>{props.cardTitle}</Card.Title>
                    <Card.Text>
                    {props.cardDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;