import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const Root = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
};

export const Route = createRootRouteWithContext<{
  queryClient: null;
}>()({
  component: Root,
});
