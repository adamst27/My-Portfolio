import { supabase } from "@lib/initSupabase";

export const POST = async (req: Request) => {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await supabase.from("clientmes").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ]);
    return new Response(JSON.stringify(data), {
      status: 201, // Created status code
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
