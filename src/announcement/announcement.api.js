import Api from '../services/api';

class AnnouncementApi extends Api {
    getAnnouncements() {
        return this.fetch('announcements');
    }

    createAnnouncement(data) {
        return this.fetch('announcements', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    deleteAnnouncement(id) {
        return this.fetch(`announcements/${id}`, {
            method: 'DELETE'
        });
    }

    updateAnnouncement(id, data) {
        return this.fetch(`announcements/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
}

export default new AnnouncementApi();
