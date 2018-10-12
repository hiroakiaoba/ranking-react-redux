// レスポンスからランキング情報だけを抜き出す
const getRanking = response => {
  const ranking = [];
  const itemLength = response.ResultSet.totalResultsReturned;
  for (let i = 1; i < itemLength; i++) {
    const item = response.ResultSet['0'].Result[i + ''];
    ranking.push({
      code: item.Code,
      name: item.name,
      url: item.Url,
      imageUrl: item.Image.Medium
    });
  };
  return ranking;
};

// 初期状態
const initialState = {
  categoryId: undefined,
  ranking: undefined,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // リクエスト開始時に状態をリセット
    case 'START_REQUEST':
      return {
        categoryId: action.payload.categoryId,
        ranking: undefined,
        error: false
      };
    // データ受信
    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
          ...state,
          ranking: getRanking(action.payload.response)
        }
    default:
      return state;
  }
};