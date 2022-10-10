/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "nextauth_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "nextauth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nextauth_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_users" (
    "id" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nextauth_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauth_verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_accounts_provider_providerAccountId_key" ON "nextauth_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_sessions_sessionToken_key" ON "nextauth_sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_users_email_key" ON "nextauth_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_verification_tokens_token_key" ON "nextauth_verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "nextauth_verification_tokens_identifier_token_key" ON "nextauth_verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "nextauth_accounts" ADD CONSTRAINT "nextauth_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nextauth_sessions" ADD CONSTRAINT "nextauth_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nextauth_users" ADD CONSTRAINT "nextauth_users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "m_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
