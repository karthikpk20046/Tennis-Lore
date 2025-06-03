import { useState } from 'react';

interface StoryCardProps {
  id: number;
  image: string;
  title: string;
  snippet: string;
  category: string;
  readTime: string;
}

const StoryCard = ({ image, title, snippet, category, readTime }: StoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="ticket-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} data-id="j0k3necxl" data-path="src/components/StoryCard.tsx">

      {/* Image Container */}
      <div className="relative overflow-hidden" data-id="pjcv90q07" data-path="src/components/StoryCard.tsx">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" data-id="tiz55rie0" data-path="src/components/StoryCard.tsx" />

        
        {/* Category Badge */}
        <div className="absolute top-3 left-3" data-id="zpj1m426m" data-path="src/components/StoryCard.tsx">
          <span
            className="px-2 py-1 text-xs font-medium rounded-full text-white"
            style={{
              backgroundColor: 'var(--grass-green)',
              fontFamily: 'var(--font-body)'
            }} data-id="90htt3k8p" data-path="src/components/StoryCard.tsx">

            {category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-3 right-3" data-id="0wcm17zxf" data-path="src/components/StoryCard.tsx">
          <span
            className="px-2 py-1 text-xs font-medium rounded-full bg-black bg-opacity-60 text-white"
            style={{ fontFamily: 'var(--font-body)' }} data-id="go9z2vzu7" data-path="src/components/StoryCard.tsx">

            {readTime}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'}`
          } data-id="yuc3ejqim" data-path="src/components/StoryCard.tsx">

          <button
            className="btn-ghost text-white border-white hover:bg-white hover:text-[var(--charcoal-gray)]"
            style={{ fontFamily: 'var(--font-body)' }} data-id="846dttjde" data-path="src/components/StoryCard.tsx">

            Read More
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4" data-id="nk4zfiduq" data-path="src/components/StoryCard.tsx">
        <h3
          className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[var(--grass-green)] transition-colors"
          style={{
            fontFamily: 'var(--font-headline)',
            color: 'var(--charcoal-gray)'
          }} data-id="jlrqglvxg" data-path="src/components/StoryCard.tsx">

          {title}
        </h3>
        
        <p
          className="text-gray-600 text-sm leading-relaxed line-clamp-3"
          style={{ fontFamily: 'var(--font-body)' }} data-id="rkh1b3ine" data-path="src/components/StoryCard.tsx">

          {snippet}
        </p>

        {/* Tennis Ball Decoration */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100" data-id="dnp3d3b4i" data-path="src/components/StoryCard.tsx">
          <div className="flex items-center space-x-2" data-id="zpulms8eb" data-path="src/components/StoryCard.tsx">
            <div className="w-2 h-2 bg-[var(--accent-gold)] rounded-full" data-id="eee4cein8" data-path="src/components/StoryCard.tsx"></div>
            <div className="w-1 h-1 bg-[var(--grass-green)] rounded-full" data-id="lb8hhzlbp" data-path="src/components/StoryCard.tsx"></div>
            <div className="w-2 h-2 bg-[var(--accent-gold)] rounded-full" data-id="5h4y4nrsa" data-path="src/components/StoryCard.tsx"></div>
          </div>
          
          <span
            className="text-xs text-gray-400 uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-body)' }} data-id="4v8h9fxnr" data-path="src/components/StoryCard.tsx">

            Tennis Lore
          </span>
        </div>
      </div>
    </div>);

};

export default StoryCard;