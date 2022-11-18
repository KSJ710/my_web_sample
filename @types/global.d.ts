/**
 * Model MRole
 *
 */
type MRole = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MTag
 *
 */
type MTag = {
  id: number
  name: string
  categoryId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MTagCategory
 *
 */
type MTagCategory = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Member
 *
 */
type Member = {
  id: number
  name: string
  email: string
  password: string
  rememberToken: string | null
  rememberExpiresAt: Date | null
  confirmToken: string | null
  confirmExpiresAt: Date | null
  confirmStatus: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Account
 *
 */
type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Session
 *
 */
type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 *
 */
type User = {
  id: string
  roleId: number
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model VerificationToken
 *
 */
type VerificationToken = {
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PostBelongToTag
 *
 */
type PostBelongToTag = {
  id: number
  postId: number
  tagId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Post
 *
 */
type Post = {
  id: number
  title: string
  linkPath: string
  imagePath: string | null
  published: boolean
  authorId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Profile
 *
 */
type Profile = {
  id: number
  bio: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
}
