import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import ebbens from "../../data/artists/ebbens";

const Ebbens = () => (
  <Layout>
    <ArtistPage artist={ebbens}/>
  </Layout>
);

export default Ebbens;
