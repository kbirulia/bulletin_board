import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './header';
import Board from './board/board';
import Modal from './modal';
import { rowsAnnouncements } from './selectors';
import { deleteAnnouncementAction, requestCreateAnnouncementAction } from '../actions/anouncementActions';

class App extends PureComponent {
  state = {
    hasModal: false,
  };

  closeModal = () => {
    this.setState({ hasModal: false });
  };

  openModal = () => {
    this.setState({ hasModal: true });
  };

  render() {
    const { rows, createAnnouncement, deleteAnnouncement } = this.props;
    return (
        <React.Fragment>
          <Header/>
            <Board rows={rows} openModal={this.openModal} deleteAnnouncement={deleteAnnouncement}/>
          {this.state.hasModal && <Modal close={this.closeModal} save={createAnnouncement}/>}
        </React.Fragment>
    );
  }
}

App.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  createAnnouncement: PropTypes.func.isRequired,
  deleteAnnouncement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  rows: rowsAnnouncements(state) || [],
});

const mapDispatchToProps = dispatch => ({
  createAnnouncement: data => dispatch(requestCreateAnnouncementAction(data)),
  deleteAnnouncement: id => dispatch(deleteAnnouncementAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
