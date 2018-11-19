import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './announcement';

const Board = (props) => {
    const renderItem = announcement => (<Announcement
        key={announcement.id}
        announcement={announcement}
        deleteAnnouncement={props.deleteAnnouncement}
        openEditModal={props.openEditModal}
    />);

    const { rows } = props;

    return (
        <main className="container p-5">
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map(renderItem)}
                </div>
            ))}
            <div className="row justify-content-center">
                <button className="bg-transparent border-0" onClick={props.openCreateModal}>
                    <img src="/img/plus.png" alt="Add"/>
                </button>
            </div>
        </main>
    );
};

Board.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
    openCreateModal: PropTypes.func.isRequired,
    openEditModal: PropTypes.func.isRequired,
    deleteAnnouncement: PropTypes.func.isRequired,
};

export default Board;
