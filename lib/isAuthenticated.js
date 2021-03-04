import { getDB } from 'lib/get-db';

export function isAuthenticated(handler) {
  return async (req, res) => {
    const { auth } = req.cookies;
    if (auth) {
      const db = getDB();

      const [validToken] = await db`
                select token,is_valid from access_tokens where expires_at > ${new Date()}
            `;

      if (!validToken) {
        res.statusCode = 401;
        return res.end();
      }
      return handler(req, res);
    }
    res.statusCode = 401;
    return res.end();
  };
}
