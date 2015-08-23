import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'updateSearchQuery',
      'getArtistCountSuccess',
      'getArtistCountFail',
      'findArtistSuccess',
      'findArtistFail'
    );
  }

  findArtist(payload) {
    $.ajax({
      url: '/api/artists/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findArtistSuccess(payload);
      })
      .fail(() => {
        this.actions.findArtistFail(payload);
      });
  }

  getArtistCount() {
    $.ajax({ url: '/api/artists/count' })
      .done((data) => {
        this.actions.getArtistCountSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getArtistCountFail(jqXhr)
      });
  }
}

export default alt.createActions(NavbarActions);