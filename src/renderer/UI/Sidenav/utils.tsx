import { RouteType } from './types';

export const getIsItemSelected = ({
  index,
  selectedItem,
  routes,
}: {
  index: number;
  selectedItem: string;
  routes: RouteType[];
}): boolean => {
  const route = routes[index];

  if (route.exact) {
    return route.path === selectedItem;
  }

  return Boolean(route.path && selectedItem.match(route.path));
};
