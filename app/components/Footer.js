import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopArtists();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardArtists = this.state.artists.map((artist) => {
      return (
        <li key={artist.artistId}>
          <Link to={'/artists/' + artist.artistId}>
            <img className='thumb-md' src={'/public/img/' + artist.artistId + '.png'} />
          </Link>
        </li>
      )
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Copyright</strong></h3>
              <p><a href='https://github.com/rfarine/nameitlater'>Source Code</a> on GitHub.</p>
              <p>© 2015 Rae Farine</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Artists</h3>
              <ul className='list-inline'>
                {leaderboardArtists}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;