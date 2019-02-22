import React from "react"
import styled from 'styled-components';
import Layout from "../components/shared/Layout";
import homepageImg from '../images/home/homepage.png';

const HomeDiv = styled.div`
  font-size: 20px;
  width: 80vw;
  margin: auto;
  margin-top: 80px;
`;

const HomeImg = styled.img`
  max-width: 100%;
`;

const IndexPage = () => (
  <Layout>
    <HomeDiv>
      <HomeImg src={homepageImg} alt='Mr Riddim'/>
    </HomeDiv>
  </Layout>
)

export default IndexPage;
