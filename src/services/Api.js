class Api {
    baseUrl = '//localhost:3003/';

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
        method: 'DELETE',
        body: {
          id,
        },
      });
    }

    updateAnnouncement(data) {
      return this.fetch(`announcements/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    }

    async fetch(url, options) {
      const response = await fetch(`${this.baseUrl}${url}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        ...options
      });

      return response.json();
    }
}

const api = new Api();

export default api;
