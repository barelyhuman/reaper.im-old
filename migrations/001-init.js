exports.up = async (db) => {
  await db`
CREATE TABLE IF NOT EXISTS "public"."access_tokens" (
    "id" varchar NOT NULL,
    "token" text,
    "expires_at" date NOT NULL DEFAULT now(),
    "is_valid" bool NOT NULL DEFAULT false,
    PRIMARY KEY ("id")
);
`;
};

exports.down = async (db) => {
  await db`
    DROP TABLE IF EXISTS "public"."access_tokens";
    `;
};
