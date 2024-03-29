import { supabase } from "@lib/initSupabase";

export const GET = async () => {
  try {
    const { data, error } = await supabase.from("Projects").select("*");
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
