import React from 'react';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import Panel from '../components/contact/Panel';
import Info from '../data/contact';
import riddim from '../images/shared/riddim.png';

const ContactDiv = styled.div`
  width: 60vw;
  margin: 50px auto auto auto;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
`;

const ContactList = styled.div`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const Contact = (props) => (
  <Layout>
    <ContactDiv>
      <h1>Contact</h1>
      <Logo src={riddim} alt="Riddim Logo"/>
      <ContactList>
        {Info.map((person) => {
          return <Panel person={person} key={person.key}/>;
        })}
      </ContactList>
    </ContactDiv>
  </Layout>
);

export default Contact;