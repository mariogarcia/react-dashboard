

export let listProducts = (state = {}, action) => {
    console.log("===> " + action.type);
    switch(action.type) {
      case 'LIST_PRODUCTS': return state.products.concat(['A']);
      default:              return state;
    }
};
