import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // TODO: GOOGLE AUTH
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnApp = nextUrl.pathname.startsWith('/app');
      const isOnLanding = nextUrl.pathname === '/'

      if (isOnApp) {
        if (!isLoggedIn) return false;
        if (nextUrl.pathname === '/app') {
          return Response.redirect(new URL('/app/dashboard', nextUrl));
        }
      }
      else if (isOnLanding && isLoggedIn) {
        return Response.redirect(new URL('/app/dashboard', nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
