import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../public/assets/images/', false, /\.(png|jpe?g|svg)$/));
//   console.log("images => ", images)

function SectionTow() {
  return (
    <section className={` ${styles.section_2} my-5 py-5`}>
      <Container>
        <Row  xs={1} md={2} lg={3} xl={5}>
            {images && images.map((element, index) => (
                    <Col id={index} key={index} className={`${index%2 !== 0 ? "pt-5" :""} my-3 `}>
                        <Card className="border-0 shadow-0 bg-transparent text-center ">
                            <Image
                                src={element}
                                alt="Picture of the author"
                                layout="responsive"
                            />
                        </Card>
                    </Col>
                )) 
                }

        </Row>
      </Container>
    </section>
  );
}

export default SectionTow;
