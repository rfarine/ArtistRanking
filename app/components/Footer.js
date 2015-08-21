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
    FooterActions.getTopRecipes();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardRecipes = this.state.recipes.map((recipe) => {
      return (
        <li key={recipe.recipeId}>
          <Link to={'/recipes/' + recipe.recipeId}>
            <img className='thumb-md' src={'/public/img/' + recipe.recipeId + '.png'} />
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
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Recipes</h3>
              <ul className='list-inline'>
                {leaderboardRecipes}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;