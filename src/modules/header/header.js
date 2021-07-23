import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../components/text/link';
import Button from '../components/button/button';
import { Col, Container, Row } from 'style/grid/index';
import { Header } from './header-style';

const HeaderComponent = ({ onLogout, testNotification }) => (
  <Header>
    <Container>
      <Row>
        <Col col={{ lg: 12, md: 12, sm: 24 }}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={79} height={79} />
          </Link>
        </Col>
        <Col col={{ lg: 12, md: 12, sm: 24 }}>
          <Button onClick={onLogout}>Logout</Button>
          <Button btnType="danger" onClick={testNotification}>
            Display notification
          </Button>
        </Col>
      </Row>
    </Container>
  </Header>
);

HeaderComponent.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default HeaderComponent;
