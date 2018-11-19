import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Announcement from './announcement';

class Board extends PureComponent {
  renderItem = (announcement) => {
    return (<Announcement
      key={announcement.id}
      announcement={announcement}
      deleteAnnouncement={this.props.deleteAnnouncement}
    />);
  }

  render() {
    const { rows } = this.props;

    return (
            <main className="container p-5">
                {rows.map((row, index) => (
                  <div className="row" key={index}>
                    {row.map(this.renderItem)}
                    </div>
                ))}
                <div className="row justify-content-center">
                  <button className="bg-transparent border-0" onClick={this.props.openModal}>
                    <img src="/img/plus.png" alt="Add"/>
                  </button>
                </div>
            </main>
    );
  }
}

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  openModal: PropTypes.func.isRequired,
  deleteAnnouncement: PropTypes.func.isRequired,
};

export default Board;
