import React from "react";
import ClipForm from "./ClipForm";
import ClipResults from "./ClipResults";
import loadClip from "../api/loadClip";
import updateClip from "../api/updateClip";
import refreshClipResults from "../utils/refreshClipResults";

const slug = "TmjsATGnSvV6wHU3nJuQUK2CVcL4Sj2wq";

export default class EditClipContainer extends React.Component {
  state = {
    data: {},
    clip: {},
    checksum: null
  };

  componentDidMount() {
    loadClip(slug, this.handleLoad);
    this.refreshTid = refreshClipResults(slug, this.handleRefresh);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTid);
  }

  onSave = () => {
    const {clip} = this.state;
    updateClip(slug, clip, this.handleUpdate);
  };

  handleUpdate = () => {

  };

  handleRefresh = data => {
    if (data.state !== "resolved") {
      return;
    }

    const {checksum} = data;
    this.setState({checksum});
  };

  handleLoad = data => {
    if (data.state === "resolved") {
      this.setState({data, checksum: data.checksum, clip: {...data}});
    } else {
      this.setState({data});
    }
  };

  handleDataChange = data => {
    let {clip} = this.state;
    clip = {...clip, ...data};
    this.setState({clip});
  };

  render() {
    const {clip, checksum} = this.state;
    const {title, sql} = clip;

    return (
      <div>
        <ClipForm title={title} sql={sql} onDataChange={this.handleDataChange} onSave={this.onSave} />
        {
          checksum ? <ClipResults key={checksum} slug={slug} />
                   : <p>Processing your query...</p>
        }
      </div>
    );
  }
}
