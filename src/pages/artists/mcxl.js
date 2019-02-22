import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import mcxl from "../../data/artists/mcxl";

const McXl = () => (
  <Layout>
    <ArtistPage artist={mcxl}/>
  </Layout>
);

export default McXl;
