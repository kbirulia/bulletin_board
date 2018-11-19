import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
    state = {
      title: '',
      text: '',
    };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  save = () => {
    this.props.save(this.state);
    this.props.close();
  };

  render() {
    return (

      <div className="modal show" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create announcement</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.close}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="container">
                <div className="form-group">
                <label htmlFor="title" className="col-form-label">
                    Title
                  </label>
                  <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>

                </div>
                <div className="form-group">
                  <label htmlFor="text" className="col-form-label">Text
                  </label>
                  <textarea name="text" value={this.state.text} className="form-control" onChange={this.handleChange}>{this.state.text}</textarea>

                </div>
                  <button type="button" className="btn btn-primary" onClick={this.save}>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default Modal;
