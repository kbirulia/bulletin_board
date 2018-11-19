import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './header';
import Board from './board/board';
import Modal from './modal';
import {
    requestCreateAnnouncementAction,
    requestDeleteAnnouncementAction, requestUpdateAnnouncementAction
} from '../announcement/anouncement.actions';

class App extends Component {
    state = {
        hasModal: false,
        id: null
    };

    closeModal = () => {
        this.setState({ hasModal: false, id: null });
    };

    openCreateModal = () => {
        this.setState({ hasModal: true });
    };

    openEditModal = (id) => {
        this.setState({ hasModal: true, id });
    };

    getSelectedAnnouncement = id => this.props.announcements.find(announ => announ.id === id);

    getRows = () => {
        const { announcements } = this.props;
        let currentRow = 0;
        return announcements.reduce((acc, item) => {
            if (acc[currentRow] && acc[currentRow].length === 3) {
                currentRow += currentRow;
            }

            if (!acc[currentRow]) {
                acc[currentRow] = [];
            }

            acc[currentRow].push(item);

            return acc;
        }, []);
    };


    render() {
        const {
            createAnnouncement, deleteAnnouncement, updateAnnouncement
        } = this.props;
        const { id } = this.state;
        return (
            <React.Fragment>
                <Header/>
                <Board
                    rows={this.getRows()}
                    openCreateModal={this.openCreateModal}
                    openEditModal={this.openEditModal}
                    deleteAnnouncement={deleteAnnouncement}
                />
                {this.state.hasModal
                  && (id
                      ? <Modal
                          close={this.closeModal}
                          announcement={this.getSelectedAnnouncement(id)}
                          save={updateAnnouncement
                          }/>
                      : <Modal close={this.closeModal} save={createAnnouncement}/>)
                }
            </React.Fragment>
        );
    }
}

App.propTypes = {
    announcements: PropTypes.array.isRequired,
    createAnnouncement: PropTypes.func.isRequired,
    deleteAnnouncement: PropTypes.func.isRequired,
    updateAnnouncement: PropTypes.func.isRequired,
};

const mapStateToProps = s => ({
    announcements: s
});

const mapDispatchToProps = dispatch => ({
    createAnnouncement: data => dispatch(requestCreateAnnouncementAction(data)),
    deleteAnnouncement: id => dispatch(requestDeleteAnnouncementAction(id)),
    updateAnnouncement: id => dispatch(requestUpdateAnnouncementAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
