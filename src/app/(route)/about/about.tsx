'use client';
import React from 'react';
import styled from 'styled-components';

import Heading from '@/src/utils/heading';
import SkillsWrap from './skillsWrap';
import ExperienceWrap from './experienceWrap';
import PageHeader from '../../_components/pageHeader';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about">
      <StyledSkills>
        <PageHeader titleBg="Experience">
          About <span className="point">Me</span>
        </PageHeader>

        <section>
          <Heading level="2">&lt; Experience &amp; Education &gt;</Heading>
          <ExperienceWrap />
        </section>

        <section>
          <Heading level="2">&lt; My Skills &gt;</Heading>
          <SkillsWrap />
        </section>
      </StyledSkills>
    </div>
  );
};

const StyledSkills = styled.main`
  section {
    max-width: 1140px;
    margin: auto;
    padding-bottom: 80px;
    &:not(:last-child) {
      position: relative;
      margin-bottom: 60px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 500px;
        height: 1px;
        background-color: #252525;
      }
    }
    > h2 {
      margin-bottom: 40px;
      font-size: 26px;
      font-weight: 600;
      text-align: center;
    }
  }
  @media ${(props) => props.theme.mobile} {
    section {
      padding-bottom: 40px;
      &:not(:last-child) {
        &::after {
          width: 70%;
        }
      }
    }
  }
`;

export default About;
