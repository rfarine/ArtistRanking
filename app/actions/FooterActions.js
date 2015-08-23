import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopArtistsSuccess',
      'getTopArtistsFail'
    );
  }

  getTopArtists() {
    $.ajax({ url: '/api/artists/top' })
      .done((data) => {
        this.actions.getTopArtistsSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopArtistsFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);