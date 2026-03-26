import type { VercelRequest, VercelResponse } from '@vercel/node';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return res.status(500).json({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables' });
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
      return res.status(response.status).json({ error: 'Failed to fetch reviews from Google' });
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

    // Cache for 6 hours
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate');
    return res.json(transformed);
  } catch (err) {
    console.error('Error fetching Google reviews:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
