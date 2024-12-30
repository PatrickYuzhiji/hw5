// {
//     "id": "56339424",
//     "name": "Barney",
//     "age": "2 years 2 months 19 days",
//     "breed": "Domestic Shorthair/Mix",
//     "gender": "Male",
//     "colors": [
//         "Brown"
//     ],
//     "declawed": false,
//     "imgIds": [
//         "9f66614c-affb-44d1-8357-048d6639458c.jpg",
//         "77d8218d-b02c-445d-bc28-f926d0f8ac21.jpg",
//         "6d2f964d-0aac-48b2-a8d2-756b18178975.jpg"
//     ],
//     "description": "Hey friends, I'm Barney! I'm a friendly, personable, go-with-the-flow kind of guy who loves people, snacks, and other cats! Pets, playtime, or just hanging out together all sound like great ideas to me; I just like to be involved! I always greet staff with a meow and some nudges for pets. If you're looking for an active, outgoing sidekick, I might be the one!SPECIAL NOTES: I'm on a prescription GI diet."
// }


import {Card, Button} from "react-bootstrap";
import {useState, useContext} from "react";
import {Carousel} from "react-bootstrap";
import SavedBudsDataContext from "../../../contexts/SavedBudsDataContext";

export default function Cat(props) {
    const [showMore, setShowMore] = useState(false);
    const [savedBuds, setSavedBuds] = useContext(SavedBudsDataContext);

    function saveCat() {
        const currentSavedBuds = JSON.parse(sessionStorage.getItem("savedBuds")) || [];
        const updatedSavedBuds = [...currentSavedBuds, props.id];
        sessionStorage.setItem('savedBuds', JSON.stringify(updatedSavedBuds));
        setSavedBuds(updatedSavedBuds);
        alert(`${props.name} has been added to your basket!`);
    }

    return <Card>
        {showMore ? (
                <Carousel style={{aspectRatio: "1/1",objectFit: 'cover', width: '100%', height: '100%'}}>
                    {props.imgIds.map((imgId, index) => (
                        <Carousel.Item key={index}>
                            <img
                                style={{aspectRatio: "1/1",width: '100%', height: '100%', objectFit: 'cover'}}
                                src={`https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/${imgId}`}
                                alt={`A picture of ${props.name}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Card.Img
                    variant="top"
                    style={{aspectRatio: "1/1"}}
                    src={`https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/${props.imgIds[0]}`}
                    alt={`A picture of ${props.name}`}
                />
            )}
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            {showMore && (<Card.Text>
                <p>{props.gender}</p>
                <p>{props.breed}</p>
                <p>{props.age}</p>
                <p>{props.description}</p>
                <br/>
            </Card.Text>
            )}
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={() => setShowMore(!showMore)}>           
            {showMore ? "Show Less" : "Show More"}</Button>
            
            <Button variant="success" onClick={saveCat} >Save</Button>

        </Card.Footer>
        
        </Card>
}