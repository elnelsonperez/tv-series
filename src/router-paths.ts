const pathsMap = {
  home: () => '/',
  tvShows: () => `/tv`,
  movies: () => `/movies`,
  tvShowDetail: (tvShowId: string) => `/tv/${tvShowId}`,
  movieDetail: (movieId: string) => `/movies/${movieId}`,
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
  route: TRoute,
  ...params: Parameters<PathsMap[TRoute]>
) => {
  const pathCb: (...args: any[]) => string = pathsMap[route];

  return pathCb(...params);
};
