import React from "react";
import Layout from "../../components/shared/Layout";
import ArtistPage from "../../components/artists/ArtistPage";
import hannahlux from "../../data/artists/hannahlux";

const HannahLux = () => (
  <Layout>
    <ArtistPage artist={hannahlux}/>
  </Layout>
);

export default HannahLux;
