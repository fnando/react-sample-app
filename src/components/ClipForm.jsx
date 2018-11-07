import React from "react";
import PropTypes from "prop-types";

export default class ClipForm extends React.Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onDataChange: PropTypes.func.isRequired,
    sql: PropTypes.string,
    title: PropTypes.string,
  };

  handleSqlChange = ({target}) => {
    const {onDataChange} = this.props;
    onDataChange({sql: target.value});
  };

  handleTitleChange = ({target}) => {
    const {onDataChange} = this.props;
    onDataChange({title: target.value});
  };

  handleSave = () => {
    const {onSave} = this.props;
    onSave();
  };

  validData() {
    const {sql, title} = this.state;
    return sql && title;
  }

  render() {
    const pending = false;
    const {sql, title} = this.props;

    return (
      <div>
        <p>
          <input defaultValue={title} type="text" onChange={this.handleTitleChange} />
        </p>

        <p>
          <textarea value={sql} onChange={this.handleSqlChange}></textarea>
        </p>

        <p>
          {
            pending ? <button disabled>Saving...</button>
                    : <button onClick={this.handleSave}>Save &amp; Run</button>
          }
        </p>
      </div>
    );
  }
}
