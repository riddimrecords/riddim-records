import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import skinny from "../../data/artists/skinny";

const Skinny = () => (
  <Layout>
    <ArtistPage artist={skinny}/>
  </Layout>
);

export default Skinny;
