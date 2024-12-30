import { useState, useContext } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Cat from './BadgerBudSummary'; 
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import SavedBudsDataContext from "../../../contexts/SavedBudsDataContext";

export default function BadgerBudsAdoptable() {
    const [buds, setBuds] = useContext(BadgerBudsDataContext);
    const [savedBuds, setSavedBuds] = useContext(SavedBudsDataContext);

    const filterBuds = (buds, savedBuds) => {
        return buds.filter((cat) => !savedBuds.includes(cat.id));
    }

    const filteredBuds = filterBuds(buds, savedBuds);

    return (
        <div>
            <h1>Available Badger Buds</h1>
            <p>The following cats are looking for a loving home! Could you help?</p>
            <Container fluid>
                <Row>  
                    {/*  if there are no available buds 
                    (e.g. all have been saved or adopted), 
                    display "No buds are available for adoption!" */}
                    {filteredBuds.length === 0 ? (
                        <p>No buds are available for adoption!</p>
                    ) : (
                        filteredBuds.map((cat) => {
                            return (
                                <Col xs={12} sm={12} md={6} lg={4} xl={3} key={cat.id}>
                                    <Cat {...cat} />
                                </Col>
                            );
                        })
                    )}
                </Row>
            </Container>
        </div>
    );
}
