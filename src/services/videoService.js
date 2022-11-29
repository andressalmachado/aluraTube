import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://hucprvbqkejfkwtysuux.supabase.co";
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1Y3BydmJxa2VqZmt3dHlzdXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MzI2NTUsImV4cCI6MTk4NTMwODY1NX0.6AoHHq3YvMTn-D4DSqIqUEjwdTOQnZ2D_lY4SCeQYws";
const supabase = createClient(PROJECT_URL, PROJECT_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
