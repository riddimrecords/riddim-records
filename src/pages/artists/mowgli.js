import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import mowgli from "../../data/artists/mowgli";

const Mowgli = () => (
  <Layout>
    <ArtistPage artist={mowgli}/>
  </Layout>
);

export default Mowgli;
