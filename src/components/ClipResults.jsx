import React from "react";
import PropTypes from "prop-types";
import loadResults from "../api/loadResults";

export default class ClipResults extends React.Component {
  static propTypes = {
    slug: PropTypes.string.isRequired
  };

  state = {
    data: {},
    loaded: false
  };

  componentDidMount() {
    const {slug} = this.props;
    loadResults(slug, this.handleLoad);
  }

  handleLoad = data => {
    this.setState({data});
  };

  renderRow = (cols, index) => {
    return (
      <tr key={index}>
        {cols.map((col, index) => <td key={index}>{col}</td>)}
      </tr>
    );
  };

  render() {
    const {data} = this.state;

    switch(data.state) {
      case "resolved":
        const {results} = data;

        return (
          <table>
            <thead>
              <tr>
                {results.fields.map(field => <th key={field}>{field}</th>)}
              </tr>
            </thead>
            <tbody>
              {results.data.map(this.renderRow)}
            </tbody>
          </table>
        );
      default:
        return <p>Loading results...</p>;
    }
  }
}
