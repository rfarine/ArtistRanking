import alt from '../alt';
import AddArtistActions from '../actions/AddArtistActions';

class AddArtistStore {
  constructor() {
    this.bindActions(AddArtistActions);
    this.name = '';
    this.body = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.bodyValidationState = '';
  }

  onAddArtistSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddArtistFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateBody(event) {
    this.body = event.target.value;
    this.bodyValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a artist name.';
  }

  onInvalidBody() {
    this.bodyValidationState = 'has-error';
  }
}

export default alt.createStore(AddArtistStore);