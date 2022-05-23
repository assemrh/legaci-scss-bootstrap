import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo-legaci.png";
import styles from "../styles/Header.module.scss";

import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row className={`${styles.row} `}  >
          <Col className={`${styles.col} `} >
            <div  className={`${styles.logo} `}>
              <Image
               
                src={logo}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div className={styles.btn_signup_container}>
              <Button  className={`${styles.button} `} variant="primary"  size="sm">Sign Up</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
