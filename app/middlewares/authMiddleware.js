import { getSession } from "@auth/express"
export function authSession(req, res, next) {
  res.locals.session =  getSession(req)
  next()
}

export async function authenticatedUser(
  req,
  res,
  next
) {
  const session = res.locals.session ?? (await getSession(req, authConfig))
  if (!session?.user) {
    res.redirect("/login")
  } else {
    next()
  }
}