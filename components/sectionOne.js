import React from "react";
import styles from "../styles/SectionOne.module.scss";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FaRegClock } from 'react-icons/fa';

function SectionOne() {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
        <Col>
          <Button  className={styles.button} >
            {/* <AiOutlineClockCircle/> */}
            <FaRegClock  className={styles.icon} /> 
            <span>
              Coming Soon...
            </span>
            </Button>
        </Col>
        </Row>
        <Row>
          <Col>
            <Card className={`${styles.card} border-0 shadow-0 bg-transparent text-center`}>
              <Card.Body>
                {/* <h1>The New Era Of Memory Sharing!</h1> */}
                <p className={styles.text}>Saving your life story forever. build and share your memories like never before!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionOne;
