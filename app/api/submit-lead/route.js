const headers = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, api-key",
};
export async function POST(req) {
  try {
    const input = await req.json();

    // Validate required fields
    if (!input.name || !input.phone) {
      return Response.json(
        { error: "name and phone are required." },
        { status: 400, headers }
      );
    }

    // Prepare payload for Kylas
    const data = {
      firstName: input.name,
      lastName: "",
      phoneNumbers: [
        {
          type: "MOBILE",
          code: "IN",
          value: input.phone,
          dialCode: "+91",
          primary: true,
        },
      ],
      country: "IN",
      companyCountry: "IN",
      customFieldValues: {
        cfSteelType: input.steelType ?? null,
        cfMaterial: input.material ?? null,
        cfMessage: input.message ?? null,
      },
    };

    // Kylas API key
    const apiKey = "cdfed323-1582-4098-8a1d-7bf2b25c1c27:18665";

    // Send request to Kylas
    const kylasRes = await fetch("https://api.kylas.io/v1/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(data),
    });

    const kylasData = await kylasRes.json();

    if (!kylasRes.ok) {
      return Response.json(
        { error: "Kylas API error", details: kylasData },
        { status: kylasRes.status, headers }
      );
    }

    return Response.json({ success: true, response: kylasData }, { status: 200, headers });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500, headers });
  }
}