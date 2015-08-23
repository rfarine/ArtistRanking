import React from 'react';
import AddArtistStore from '../stores/AddArtistStore';
import AddArtistActions from '../actions/AddArtistActions';

class AddArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddArtistStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddArtistStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddArtistStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var body = this.state.body;

    if (!name) {
      AddArtistActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!body) {
      AddArtistActions.invalidBody();
    }

    if (name && body) {
      AddArtistActions.addArtist(name, body);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add artist</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Title</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddArtistActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.bodyValidationState}>
                    <label className='control-label'>Artist Description</label>
                    <input type='text' className='form-control' ref='bodyTextField' value={this.state.body}
                           onChange={AddArtistActions.updateBody} />
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArtist;