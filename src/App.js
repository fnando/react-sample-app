import React from "react";
import NewClipContainer from "./components/NewClipContainer";
import EditClipContainer from "./components/EditClipContainer";

export default class App extends React.Component {
  render() {
    if (window.location.pathname.match(/^\/?$/)) {
      return <NewClipContainer />;
    } else {
      return <EditClipContainer />;
    }
  }
}
