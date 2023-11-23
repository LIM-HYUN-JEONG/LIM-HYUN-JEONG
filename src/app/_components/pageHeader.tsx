'use client';
import React, { useState, useEffect } from 'react';
import Heading from '@/src/utils/heading';
import styled from 'styled-components';

export default function PageHeader(props: any) {
  const [load, setLoad] = useState(false);
  const { children } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 450);
    return () => setLoad(false);
  }, []);

  return (
    <StyledPageHeader className="heading-wrap">
      <Heading>{children}</Heading>
      <span className={`title-bg${load ? ' on' : ''}`}>{props.titleBg}</span>
    </StyledPageHeader>
  );
}

const StyledPageHeader = styled.div`
  position: relative;
  padding: 80px 0px 80px 0px;
  text-align: center;
  h1 {
    font-size: 56px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px auto;
  }
  .title-bg {
    font-size: 110px;
    left: 0;
    letter-spacing: 60px;
    position: absolute;
    right: 0;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-53%);
    opacity: 0.07;
    &.on {
      transition: all 1.1s;
      letter-spacing: 10px;
    }
  }
  @media ${(props) => props.theme.tablet} {
    padding: 60px 0px 60px 0px;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 30px 0px 30px 0px;
    h1 {
      font-size: 46px;
      letter-spacing: 3px;
    }
    .title-bg {
      font-size: 80px;
      letter-spacing: 20px;
      &.on {
      }
    }
  }
`;
