import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const authRequest = auth.handleRequest(event)

  if (isRouteProtected(event.route.id) && !await authRequest.validate()) {
    throw redirect(301, '/login')
  }

  event.locals.auth = authRequest;
  return await resolve(event)
}

function isRouteProtected(routeId: string | null) {
  return !routeId ? false : routeId.includes('/(protected)')
};
