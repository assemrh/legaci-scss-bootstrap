import React from "react";
import Image from "next/image";
import img from "../public/assets/Collecting-pana-1.png";
import styles from "../styles/Home.module.scss";
import { Card, Col, Container, Row } from "react-bootstrap";

function SectionThree() {
  return (
    <section className={styles.section_3}>
      <Container>
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Row  xs={1} md={1} lg={2} xl={2}>
                <Col>
                  <Image
                    src={img}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </Col>
                <Col>
                  <div className="p-3 pt-5">
                    <h2>Become Pioneers and Build with Us!</h2>
                    <p>
                      Legaci is a new private social media app that allows you
                      to build your private life story, save all your memories,
                      send them to the future, and create albums with friends
                      and family with all your shared memories, together.
                    </p>
                    <p>
                      By joining us today, you will become the first exclusive
                      users to help build Legaci, as well as having access to
                      all our feautures for free. FOREVER! Who’s With Us?
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionThree;
