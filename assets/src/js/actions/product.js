export function fetchCategory() {
    return function(dispatch) {
      return axios.get("http://127.0.0.1:8000/api/product/category/")
        .then(({ data }) => {
        dispatch(setArticleDetails(data));
      });
    };
  }