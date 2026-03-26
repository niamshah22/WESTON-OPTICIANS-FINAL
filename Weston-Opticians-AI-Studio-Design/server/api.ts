import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

interface CachedData {
  data: unknown;
  timestamp: number;
}

let cache: CachedData | null = null;
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

app.get('/api/google-reviews', async (_req, res) => {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    res.status(500).json({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables' });
    return;
  }

  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    res.json(cache.data);
    return;
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
      res.status(response.status).json({ error: 'Failed to fetch reviews from Google' });
      return;
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

    cache = { data: transformed, timestamp: Date.now() };
    res.json(transformed);
  } catch (err) {
    console.error('Error fetching Google reviews:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Google Reviews API server running on port ${PORT}`);
});
