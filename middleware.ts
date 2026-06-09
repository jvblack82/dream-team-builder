import { next } from '@vercel/edge';

// Gate the Betterworks pitch deck. Runs ONLY on the paths in `matcher`;
// every other route on the site is untouched.
export const config = {
  matcher: ['/betterworks', '/betterworks/:path*'],
};

const REALM = 'Betterworks';
const COOKIE = 'bw_access';

function unauthorized(pw?: string, token?: string): Response {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
      // TEMP DIAGNOSTIC (no secret leaked): does the runtime see the env vars?
      'x-bw-pw-set': pw ? '1' : '0',
      'x-bw-pw-len': String((pw || '').length),
      'x-bw-token-set': token ? '1' : '0',
    },
  });
}

export default function middleware(request: Request): Response {
  const PW = process.env.BETTERWORKS_PW;
  const TOKEN = process.env.BETTERWORKS_TOKEN;

  // Fail closed if the password env var is not configured.
  if (!PW) return unauthorized(PW, TOKEN);

  const url = new URL(request.url);

  // 1) Tokenized bypass link: ?key=<TOKEN>, or a cookie set from a prior visit.
  //    Lets a shareable link skip the password prompt entirely.
  if (TOKEN) {
    const queryKey = url.searchParams.get('key');
    const cookies = request.headers.get('cookie') || '';
    const hasCookie = cookies
      .split(';')
      .some((c) => c.trim() === `${COOKIE}=${TOKEN}`);

    if (queryKey === TOKEN || hasCookie) {
      const res = next();
      if (queryKey === TOKEN) {
        // Remember access for 30 days so a refresh without the token still works.
        res.headers.append(
          'Set-Cookie',
          `${COOKIE}=${TOKEN}; Path=/betterworks; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`,
        );
      }
      return res;
    }
  }

  // 2) HTTP Basic Auth. Username is ignored; only the password is checked.
  const auth = request.headers.get('authorization');
  if (auth && auth.startsWith('Basic ')) {
    let decoded = '';
    try {
      decoded = atob(auth.slice(6));
    } catch {
      return unauthorized(PW, TOKEN);
    }
    const sep = decoded.indexOf(':');
    const pass = sep >= 0 ? decoded.slice(sep + 1) : '';
    if (pass === PW) return next();
  }

  return unauthorized(PW, TOKEN);
}
