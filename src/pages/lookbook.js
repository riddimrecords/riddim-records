import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import Layout from "../components/shared/Layout";
import './Lookbook.css';
import lookbook1 from '../images/lookbook/lookbook1.jpg';
import lookbook2 from '../images/lookbook/lookbook2.jpg';
import lookbook3 from '../images/lookbook/lookbook3.jpg';
import lookbook4 from '../images/lookbook/lookbook4.jpg';
import lookbook5 from '../images/lookbook/lookbook5.jpg';
import lookbook6 from '../images/lookbook/lookbook6.jpg';
import lookbook7 from '../images/lookbook/lookbook7.jpg';
import lookbook8 from '../images/lookbook/lookbook8.jpg';
import lookbook9 from '../images/lookbook/lookbook9.jpg';
import lookbook10 from '../images/lookbook/lookbook10.jpg';

const lookbookImages = [lookbook1, lookbook2, lookbook3, lookbook4, lookbook5, lookbook6, lookbook7,
  lookbook8, lookbook9, lookbook10];

const LookbookGrid = styled.div`
  width: 80vw;
  margin: 50px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Lookbook = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Lookbook</title>
    </Helmet>
    <LookbookGrid>
      {lookbookImages.map((image, index) => {
        return (
          <div key={index} className='lookbookImg'>
            <Img fixed={image} alt={`Lookbook ${lookbookImages.indexOf(image) + 1}`}/>
          </div>
        );
      })}
    </LookbookGrid>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Lookbook;