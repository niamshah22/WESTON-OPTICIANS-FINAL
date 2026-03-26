export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return new Response(
      JSON.stringify({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch reviews from Google' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const placeData = await response.json();

    const transformed = {
      rating: placeData.rating ?? 0,
      totalReviews: placeData.userRatingCount ?? 0,
      reviews: (placeData.reviews ?? []).map((review: any) => ({
        authorName: review.authorAttribution?.displayName ?? 'Anonymous',
        authorPhoto: review.authorAttribution?.photoUri ?? '',
        rating: review.rating ?? 5,
        text: review.text?.text ?? '',
        relativeTime: review.relativePublishTimeDescription ?? '',
      })),
    };

    return new Response(JSON.stringify(transformed), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=21600, stale-while-revalidate',
      },
    });
  } catch (err) {
    console.error('Error fetching Google reviews:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
