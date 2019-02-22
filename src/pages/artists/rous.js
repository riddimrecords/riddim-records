import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import rous from "../../data/artists/rous";

const Rous = () => (
  <Layout>
    <ArtistPage artist={rous}/>
  </Layout>
);

export default Rous;
