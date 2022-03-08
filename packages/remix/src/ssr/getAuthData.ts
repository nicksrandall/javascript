import { AuthStatus, Session, User } from '@clerk/backend-core';
import Clerk, { sessions, users } from '@clerk/clerk-sdk-node';
import { GetSessionTokenOptions } from '@clerk/types';

import { RootAuthLoaderOptions } from './types';
import { parseCookies } from './utils';

export type AuthData = {
  sessionId: string | null;
  session: Session | undefined | null;
  userId: string | null;
  user: User | undefined | null;
  getToken: (...args: any) => Promise<string | null>;
};

export async function getAuthData(
  req: Request,
  opts: RootAuthLoaderOptions = {},
): Promise<{ authData: AuthData | null; showInterstitial?: boolean }> {
  const { loadSession, loadUser } = opts;
  const { headers } = req;
  const cookies = parseCookies(req);

  const getToken = (options: GetSessionTokenOptions = {}) => {
    if (options.template) {
      throw new Error('Retrieving a JWT template during SSR will be supported soon.');
    }
    return Promise.resolve(cookies['__session'] || null);
  };

  const signedOutState = {
    sessionId: null,
    session: null,
    userId: null,
    user: null,
    getToken,
  };

  try {
    const { status, sessionClaims } = await Clerk.base.getAuthState({
      cookieToken: cookies['__session'],
      clientUat: cookies['__client_uat'],
      headerToken: headers.get('authorization')?.replace('Bearer ', ''),
      origin: headers.get('origin'),
      host: headers.get('host') as string,
      forwardedPort: headers.get('x-forwarded-port') as string,
      forwardedHost: headers.get('x-forwarded-host') as string,
      referrer: headers.get('referer'),
      userAgent: headers.get('user-agent') as string,
      fetchInterstitial: () => Promise.resolve(''),
    });

    if (status === AuthStatus.Interstitial) {
      return { authData: null, showInterstitial: true };
    }

    if (status === AuthStatus.SignedOut || !sessionClaims) {
      return { authData: signedOutState };
    }

    const [user, session] = await Promise.all([
      loadUser ? users.getUser(sessionClaims.sub as string) : Promise.resolve(undefined),
      loadSession ? sessions.getSession(sessionClaims.sid as string) : Promise.resolve(undefined),
    ]);

    return {
      authData: {
        sessionId: sessionClaims.sid as string,
        userId: sessionClaims.sub as string,
        user: user,
        session: session,
        getToken,
      },
    };
  } catch (e) {
    return { authData: signedOutState };
  }
}