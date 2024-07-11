/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://collection_owner:CqA3HZYJL6VB@ep-bitter-voice-a5cth6ww.us-east-2.aws.neon.tech/Ai-content_generator?sslmode=require"
    }
    
  };
  