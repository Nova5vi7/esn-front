import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '@/components/text/link';
import UserAvatar from '@/components/user-avatar/user-avatar-container';
import { Col, Container, Row } from 'style/grid/index';
import { Header, WrapContent } from './header-style';
import { MenuWrapper, MenuItem } from '@/components/menu';
import { DropdownWrap, DropdownItem } from '@/components/dropdown';

const HeaderComponent = ({
  dropdownItem,
  pages,
  dropdownVisible,
  handleDropdown
}) => (
  <Header>
    <Container>
      <Row>
        <Col col={{ lg: 16, md: 12, sm: 24 }}>
          <WrapContent>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" width={79} height={79} />
            </Link>
            <MenuWrapper>
              {pages.map(({ path, name }) => (
                <MenuItem key={path}>
                  <Link href={path}>{name}</Link>
                </MenuItem>
              ))}
            </MenuWrapper>
          </WrapContent>
        </Col>
        <Col col={{ lg: 8, md: 12, sm: 24 }}>
          <WrapContent className="right">
            <UserAvatar
              src="/images/user-plug.png"
              alt="User Small"
              type="small"
              id="toggleDropdown"
              handleDropdown={handleDropdown}
            />
            {dropdownVisible ? (
              <DropdownWrap>
                {dropdownItem.map(({ func, text }, id) => (
                  <DropdownItem onClick={func} key={id}>
                    {text}
                  </DropdownItem>
                ))}
              </DropdownWrap>
            ) : null}
          </WrapContent>
        </Col>
      </Row>
    </Container>
  </Header>
);

HeaderComponent.propTypes = {
  handleDropdown: PropTypes.func.isRequired
};

export default HeaderComponent;
