import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Announcement extends PureComponent {
    state = {
        allText: false,
    };

    getText() {
        const { text } = this.props.announcement;

        if (this.state.allText || text.length <= 200) {
            return text;
        }

        return text.slice(0, 200).concat('...');
    }

    toggleText = () => {
        this.setState({ allText: !this.state.allText });
    };

    delete = () => {
        const { announcement: { id }, deleteAnnouncement } = this.props;
        deleteAnnouncement(id);
    };

    edit = () => {
        const { announcement: { id }, openEditModal } = this.props;
        openEditModal(id);
    };

    render() {
        const { announcement } = this.props;

        return (
            <div className="col-4 p-3">
                <article className="bg-secondary rounded p-3">
                    <div className="modal-header border-0">
                        <h5 className="text-center modal-title">{announcement.title}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={this.delete}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p onClick={this.toggleText}>{this.getText()}</p>
                    <div className="row justify-content-center">
                        <div className="col-6">{announcement.createdAt}</div>
                        <button className="btn btn-info col-5" onClick={this.edit} >
                           Edit
                        </button>
                    </div>
                </article>
            </div>
        );
    }
}

Announcement.propTypes = {
    announcement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    deleteAnnouncement: PropTypes.func.isRequired,
    openEditModal: PropTypes.func.isRequired,
};

export default Announcement;
