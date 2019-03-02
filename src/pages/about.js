import React from "react";
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import Layout from "../components/shared/Layout";
import Section from "../components/about/Section";
import Info from "../data/about";

const AboutDiv = styled.div`
  width: 50vw;
  font-size: 20px;
  margin: 80px auto 0px auto;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
`;

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>Riddim Records | About</title>
    </Helmet>
    <AboutDiv>
      {Info.map(brand => {
        return <Section key={brand.name} brand={brand} />;
      })}
    </AboutDiv>
  </Layout>
);

export default AboutPage;
