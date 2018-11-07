import React from "react";
import ClipForm from "./ClipForm";
import createClip from "../api/createClip";

export default class NewClipContainer extends React.Component {
  state = {
    data: {},
    clip: {}
  };

  onSave = () => {
    const {clip} = this.state;
    createClip(clip, this.handleLoad);
  };

  handleLoad = data => {
    this.setState({data});
  };

  handleDataChange = data => {
    let {clip} = this.state;
    clip = {...clip, ...data};
    this.setState({clip});
  };

  render() {
    const {data} = this.state;

    switch (data.state) {
      case "resolved":
        window.location.href = `/dataclips/${data.clip.slug}`;
        return null;
      default:
        return <ClipForm onDataChange={this.handleDataChange} onSave={this.onSave} />;
    }
  }
}
