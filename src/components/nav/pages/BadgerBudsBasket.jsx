import { useContext } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Catadopted from './BadgerBudAdopted'; 
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import SavedBudsDataContext from "../../../contexts/SavedBudsDataContext";
import AdoptedBudsDataContext from "../../../contexts/AdoptedBudsDataContext";


export default function BadgerBudsBasket(props) {
    const [buds, setBuds] = useContext(BadgerBudsDataContext);
    const [savedBuds, setSavedBuds] = useContext(SavedBudsDataContext);
    const [commitBuds, setCommitBuds] = useContext(AdoptedBudsDataContext);


    const adoptBuds = (buds, savedBuds) => {
        return buds.filter((cat) => savedBuds.includes(cat.id));
    }
    
    const adoptedBuds = adoptBuds(buds, savedBuds);

    const filterBuds = (adoptedBuds, commitBuds) => {
        return adoptedBuds.filter((cat) => !commitBuds.includes(cat.id));
    }

    const filteredBuds = filterBuds(adoptedBuds, commitBuds);

    
    return (
        <>
            <h1>Badger Buds Basket</h1>
            <p>These cute cats could be all yours!</p>
            <Container fluid>
                <Row>  
                    {/* if there are no saved buds, display "You have no buds in your basket!" */}
                    {filteredBuds.length === 0 ? (
                        <p>You have no buds in your basket!</p>
                    ) : (
                        filteredBuds.map((cat) => {
                            return (
                                <Col xs={12} sm={12} md={6} lg={4} xl={3} key={cat.id}>
                                    <Catadopted {...cat} />
                                </Col>
                            );
                        })
                    )}
                </Row>
            </Container>
        </>
    );
}