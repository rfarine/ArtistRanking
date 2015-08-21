import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopRecipesSuccess',
      'getTopRecipesFail'
    );
  }

  getTopRecipes() {
    $.ajax({ url: '/api/recipes/top' })
      .done((data) => {
        this.actions.getTopRecipesSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopRecipesFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);