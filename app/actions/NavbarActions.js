import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'updateSearchQuery',
      'getRecipeCountSuccess',
      'getRecipeCountFail',
      'findRecipeSuccess',
      'findRecipeFail'
    );
  }

  findRecipe(payload) {
    $.ajax({
      url: '/api/recipes/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findRecipeSuccess(payload);
      })
      .fail(() => {
        this.actions.findRecipeFail(payload);
      });
  }

  getRecipeCount() {
    $.ajax({ url: '/api/recipes/count' })
      .done((data) => {
        this.actions.getRecipeCountSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getRecipeCountFail(jqXhr)
      });
  }
}

export default alt.createActions(NavbarActions);