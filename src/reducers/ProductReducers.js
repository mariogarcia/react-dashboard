

export let listProducts = (state = {}, action) => {
    switch(action.type) {
      case 'LIST_PRODUCTS': return state.products.concat(['A']);
      default:              return state;
    }
};
