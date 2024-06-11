import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

const Root = () => <Outlet />;

export const Route = createRootRouteWithContext<{
  queryClient: null;
}>()({
  component: Root,
});
