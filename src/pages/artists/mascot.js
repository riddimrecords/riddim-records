import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import mascot from "../../data/artists/mascot";

const Mascot = () => (
  <Layout>
    <ArtistPage artist={mascot}/>
  </Layout>
);

export default Mascot;
