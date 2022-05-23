import React from "react";
import styles from "../styles/SectionOne.module.scss";
import { Card, Col, Container, Row } from "react-bootstrap";

function SectionOne() {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <Card className={`${styles.card} border-0 shadow-0 bg-transparent text-center`}>
              <Card.Body>
                <h1>The New Era Of Memory Sharing!</h1>
                <h3>Build And Share Your Memories Like Never Before!</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionOne;
