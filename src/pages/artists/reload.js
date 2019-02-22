import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import reload from "../../data/artists/reload";

const Reload = () => (
  <Layout>
    <ArtistPage artist={reload}/>
  </Layout>
);

export default Reload;
