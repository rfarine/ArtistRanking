import alt from '../alt';

class AddArtistActions {
  constructor() {
    this.generateActions(
      'addArtistSuccess',
      'addArtistFail',
      'updateName',
      'updateBody',
      'invalidName',
      'invalidBody'
    );
  }

  addArtist(name, body) {
    $.ajax({
      type: 'POST',
      url: '/api/artists',
      data: { name: name, body: body }
    })
      .done((data) => {
        this.actions.addArtistSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addArtistFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddArtistActions);