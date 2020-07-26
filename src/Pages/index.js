import React, { Component } from "react";
import Layout from "../Containers/Layout";
import Main from "../components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Main />
        </Layout>
      </div>
    );
  }
}
export default App;
