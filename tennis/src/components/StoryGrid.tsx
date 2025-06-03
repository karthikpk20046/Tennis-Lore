import StoryCard from './StoryCard';

// Mock data for placeholder stories
const mockStories = [
{
  id: 1,
  image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&auto=format',
  title: 'The Greatest Comeback in Wimbledon History',
  snippet: 'Roger Federer faced match point against Novak Djokovic but refused to give up. What followed was one of the most spectacular comebacks ever witnessed on Centre Court.',
  category: 'Historic Matches',
  readTime: '5 min read'
},
{
  id: 2,
  image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=300&fit=crop&auto=format',
  title: 'Serena Williams: The Queen of Tennis',
  snippet: 'From Compton courts to global domination, Serena Williams redefined what it means to be a champion. Her journey inspires millions around the world to chase their dreams.',
  category: 'Player Profiles',
  readTime: '7 min read'
},
{
  id: 3,
  image: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400&h=300&fit=crop&auto=format',
  title: 'My First Tennis Lesson at Age 60',
  snippet: 'They say you cannot teach an old dog new tricks, but tennis proved them wrong. Here is how I discovered my passion for the sport later in life.',
  category: 'Personal Stories',
  readTime: '4 min read'
},
{
  id: 4,
  image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop&auto=format',
  title: 'The Science Behind the Perfect Serve',
  snippet: 'Breaking down the biomechanics of professional serves reveals the incredible physics at play. From angular momentum to ball rotation, every detail matters.',
  category: 'Technical Analysis',
  readTime: '6 min read'
},
{
  id: 5,
  image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc3c?w=400&h=300&fit=crop&auto=format',
  title: 'Tennis Fashion Through the Decades',
  snippet: 'From all-white traditions to bold modern designs, tennis fashion has evolved dramatically. Explore how style and performance have shaped the courts.',
  category: 'Culture & Style',
  readTime: '8 min read'
},
{
  id: 6,
  image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format',
  title: 'Building Community Tennis Courts in Rural Areas',
  snippet: 'How one volunteer group transformed empty lots into thriving tennis communities, bringing the sport to underserved areas and changing lives forever.',
  category: 'Community Impact',
  readTime: '5 min read'
}];


const StoryGrid = () => {
  return (
    <section className="py-12 bg-gray-50 relative court-pattern" data-id="9n3hettai" data-path="src/components/StoryGrid.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="pi70x0fvh" data-path="src/components/StoryGrid.tsx">
        {/* Section Header */}
        <div className="text-center mb-12" data-id="wie8f1s32" data-path="src/components/StoryGrid.tsx">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-headline)',
              color: 'var(--charcoal-gray)'
            }} data-id="v7b02vi50" data-path="src/components/StoryGrid.tsx">

            Latest Tennis Stories
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'var(--font-body)' }} data-id="ymu5hx2br" data-path="src/components/StoryGrid.tsx">

            Dive into the world of tennis through captivating stories, match analyses, 
            and personal journeys shared by our passionate community.
          </p>
          
          {/* Tennis Net Decoration */}
          <div className="flex justify-center mt-6" data-id="5ouq1juky" data-path="src/components/StoryGrid.tsx">
            <div className="flex items-center space-x-1" data-id="k12yw0rix" data-path="src/components/StoryGrid.tsx">
              {[...Array(5)].map((_, i) =>
              <div
                key={i}
                className="w-3 h-0.5 bg-[var(--grass-green)] opacity-60"
                style={{ animationDelay: `${i * 0.1}s` }} data-id="u4he3v4nl" data-path="src/components/StoryGrid.tsx">
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="ju6h3q9pt" data-path="src/components/StoryGrid.tsx">
          {mockStories.map((story) =>
          <StoryCard
            key={story.id}
            id={story.id}
            image={story.image}
            title={story.title}
            snippet={story.snippet}
            category={story.category}
            readTime={story.readTime} data-id="skh0nrsln" data-path="src/components/StoryGrid.tsx" />

          )}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12" data-id="jg690uczj" data-path="src/components/StoryGrid.tsx">
          <button className="btn-primary cheer-animation text-lg px-8 py-3" data-id="k1yyos0nf" data-path="src/components/StoryGrid.tsx">
            Load More Stories
          </button>
          
          {/* Tennis Court Center Line */}
          <div className="flex items-center justify-center mt-8" data-id="9oahk2eni" data-path="src/components/StoryGrid.tsx">
            <div className="h-px bg-[var(--grass-green)] w-16 opacity-30" data-id="h260a9e60" data-path="src/components/StoryGrid.tsx"></div>
            <div className="mx-4 w-3 h-3 border-2 border-[var(--accent-gold)] rounded-full bg-white" data-id="od6k45e2z" data-path="src/components/StoryGrid.tsx"></div>
            <div className="h-px bg-[var(--grass-green)] w-16 opacity-30" data-id="mttrs36ro" data-path="src/components/StoryGrid.tsx"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default StoryGrid;