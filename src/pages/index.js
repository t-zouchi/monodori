import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <p>物取りの背景に使ってね.ページ開いてF11で最大画面にして写真を取ろう!</p>
    <Link to="/gray" className="grayLink myLink">
      グレー
    </Link>
    <br />
    <Link to="/graygradient" className="grayGradientLink myLink">
      グレーのグラデーション{" "}
    </Link>
    <br />
    <Link to="/rainbow" className="rainbowLink myLink">
      レインボー
    </Link>
  </Layout>
);

export default IndexPage;
