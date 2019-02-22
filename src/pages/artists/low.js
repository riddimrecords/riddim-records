import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import low from "../../data/artists/low";

const Low = () => (
  <Layout>
    <ArtistPage artist={low}/>
  </Layout>
);

export default Low;
