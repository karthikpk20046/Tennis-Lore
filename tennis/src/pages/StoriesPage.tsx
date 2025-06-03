import Header from '@/components/Header';
import StoryGrid from '@/components/StoryGrid';
import Footer from '@/components/Footer';

const StoriesPage = () => {
  return (
    <div className="min-h-screen bg-white" data-id="utpr9nbxd" data-path="src/pages/StoriesPage.tsx">
      <Header data-id="kdorrmka8" data-path="src/pages/StoriesPage.tsx" />
      <main data-id="9pz6zf66f" data-path="src/pages/StoriesPage.tsx">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-16" data-id="08fui46a5" data-path="src/pages/StoriesPage.tsx">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="vjuyuiwcq" data-path="src/pages/StoriesPage.tsx">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: 'var(--font-headline)',
                color: 'var(--charcoal-gray)'
              }} data-id="xo77pvy2z" data-path="src/pages/StoriesPage.tsx">

              All Tennis Stories
            </h1>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }} data-id="z13pkyyd5" data-path="src/pages/StoriesPage.tsx">

              Discover the complete collection of tennis tales from our passionate community of players, fans, and historians.
            </p>
          </div>
        </section>

        <StoryGrid data-id="uaap9p6uj" data-path="src/pages/StoriesPage.tsx" />
      </main>
      <Footer data-id="750qx07ae" data-path="src/pages/StoriesPage.tsx" />
    </div>);

};

export default StoriesPage;