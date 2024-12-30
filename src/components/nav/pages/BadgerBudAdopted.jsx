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
import SavedBudsDataContext from "../../../contexts/SavedBudsDataContext";
import AdoptedBudsDataContext from "../../../contexts/AdoptedBudsDataContext";

export default function Catadopted(props) {
    const [savedBuds, setSavedBuds] = useContext(SavedBudsDataContext);
    const [commitBuds, setCommitBuds] = useContext(AdoptedBudsDataContext);

    // When a user clicks the "unselect" button for a particular buddy
    function unselectCat() {
        const currentSavedBuds = JSON.parse(sessionStorage.getItem("savedBuds")) || [];
        const updatedSavedBuds = currentSavedBuds.filter((catId) => catId !== props.id);
        sessionStorage.setItem('savedBuds', JSON.stringify(updatedSavedBuds));
        setSavedBuds(updatedSavedBuds);

        alert(`${props.name} has been removed from your basket!`);
    }
    
    // When a user clicks the "adopt" button for a particular buddy
    function adoptCommit() {
        const currentAdoptedBuds = JSON.parse(sessionStorage.getItem("adoptedBuds")) || [];
        const updatedAdoptedBuds = currentAdoptedBuds.concat(props.id);
        sessionStorage.setItem('adoptedBuds', JSON.stringify(updatedAdoptedBuds));
        setCommitBuds(updatedAdoptedBuds);

        alert(`${props.name} has been adopted!`);
    }


    return <Card>
        <Card.Img
                style={{aspectRatio: "1/1"}} 
                variant="top" 
                src={`https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/${props.imgIds[0]}`} 
                alt={`A picture of ${props.name}`} />
        
        
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
            {/* When a user clicks the "unselect" button for a particular buddy, 
            an alert should appear stating that CAT_NAME has been removed from your basket! 
            to notify the user. Furthermore, that buddy should no longer be shown on 
            the "My Basket" page, it should be returned to the "Available Cats" page. 
            This should happen immediately -- the user should not need to refresh the page.
            You MUST implement this using sessionStorage. 
            I would recommend updating savedCatIds by removing the bud's ID from this list. */}

            <Button variant="primary" onClick={unselectCat}>Unselect</Button>
            {/* When a user clicks the "adopt" button for a particular buddy, 
            an alert should appear stating that CAT_NAME has been adopted! 
            to notify the user. Furthermore, that buddy should no longer be 
            shown on either the "Available Cats" or the "My Basket" pages. 
            This should happen immediately -- the user should not need to refresh the page.
            You MUST implement this using sessionStorage. I would recommend creating 
            a new adoptedCatIds to keep track of the buds that are adopted.
            Note: There is no way to "unadopt" a cat through our UI. 
            Nor should you! 😿 Once the user has clicked "adopt", 
            the only way adoptedCatIds can be reset is by closing the browser. */}

            <Button variant="success" onClick={adoptCommit}>Adopt</Button>
        </Card.Footer>
        </Card>
}