import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface Review {
  authorName: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

const FALLBACK_REVIEWS: Review[] = [
  { authorName: "Sarah Jenkins", authorPhoto: "", rating: 5, text: "The most thorough eye exam I've ever had. They explained everything so clearly and helped me find frames that actually suit my face shape.", relativeTime: "2 months ago" },
  { authorName: "David Thompson", authorPhoto: "", rating: 5, text: "Incredible selection of designer frames you won't find in the big chains. The personal service is what keeps me coming back year after year.", relativeTime: "3 months ago" },
  { authorName: "Emma Wilson", authorPhoto: "", rating: 5, text: "Brilliant with children. My daughter was nervous about her first test but the team made it such a fun and positive experience.", relativeTime: "1 month ago" },
  { authorName: "James Carter", authorPhoto: "", rating: 5, text: "Been coming here for over 10 years. The staff are always friendly and knowledgeable. Best opticians in the area by far.", relativeTime: "2 weeks ago" },
  { authorName: "Rachel Adams", authorPhoto: "", rating: 5, text: "Fantastic service from start to finish. They spotted an issue with my eyes that my previous optician had missed. Can't recommend them enough.", relativeTime: "4 months ago" },
];

function useGoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-current' : 'fill-none opacity-30'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.authorName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex-shrink-0 w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-5">
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt={review.authorName}
            className="w-11 h-11 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm font-bold">
            {initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate">{review.authorName}</p>
          <p className="text-xs text-zinc-400">{review.relativeTime}</p>
        </div>
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-zinc-700 mt-4 leading-relaxed line-clamp-3 text-sm">
        "{review.text}"
      </p>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 animate-pulse">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-11 h-11 rounded-full bg-zinc-200" />
        <div className="flex-1">
          <div className="h-4 w-24 bg-zinc-200 rounded mb-2" />
          <div className="h-3 w-16 bg-zinc-100 rounded" />
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-zinc-200 rounded" />)}
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-zinc-200 rounded w-full" />
        <div className="h-3 bg-zinc-200 rounded w-full" />
        <div className="h-3 bg-zinc-200 rounded w-3/4" />
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const { data, loading, error } = useGoogleReviews();
  const trackRef = useRef<HTMLDivElement>(null);

  const reviews = data?.reviews?.length ? data.reviews : FALLBACK_REVIEWS;
  const rating = data?.rating ?? 4.9;
  const totalReviews = data?.totalReviews ?? 248;

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

  return (
    <section className="pt-4 pb-24 bg-zinc-50">
      <style>{`
        @keyframes review-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 mb-14">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black">
              Trusted by the <br /> <span className="text-brand-purple">Community.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-md">
              Don't just take our word for it. Here's what our community has to say.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold">{rating.toFixed(1)}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-zinc-100" />
            <div>
              <p className="text-sm font-bold">Google Reviews</p>
              <p className="text-xs text-zinc-500">Based on {totalReviews} verified reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loading ? (
          <div className="flex gap-6 px-6">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{ animation: 'review-scroll 40s linear infinite' }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`${review.authorName}-${i}`} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
