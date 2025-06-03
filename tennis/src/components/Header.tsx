import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" data-id="h8k7vfpav" data-path="src/components/Header.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="s0pr0s26f" data-path="src/components/Header.tsx">
        <div className="flex justify-between items-center h-16" data-id="2r133ah4w" data-path="src/components/Header.tsx">
          {/* Logo */}
          <div className="flex items-center" data-id="gqyea9inr" data-path="src/components/Header.tsx">
            <a href="/" className="flex items-center space-x-2 cheer-animation" data-id="t1tmn42gy" data-path="src/components/Header.tsx">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--grass-green)] to-[var(--accent-gold)] rounded-full flex items-center justify-center" data-id="hprddw2w8" data-path="src/components/Header.tsx">
                <span className="text-white font-bold text-sm" data-id="k5x4cevmq" data-path="src/components/Header.tsx">🎾</span>
              </div>
              <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-headline)', color: 'var(--grass-green)' }} data-id="229n5mt6f" data-path="src/components/Header.tsx">
                TennisLore
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-id="lvtu0frdo" data-path="src/components/Header.tsx">
            <a
              href="/"
              className="text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="mqcugfmav" data-path="src/components/Header.tsx">

              Home
            </a>
            <a
              href="/stories"
              className="text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="ydaiy2v94" data-path="src/components/Header.tsx">

              Stories
            </a>
            <a
              href="/submit"
              className="text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="99lvnqxqw" data-path="src/components/Header.tsx">

              Submit
            </a>
          </nav>

          {/* Submit Story Button - Desktop */}
          <div className="hidden md:block" data-id="relsn4lp0" data-path="src/components/Header.tsx">
            <button className="btn-primary cheer-animation" data-id="rky1vf4gh" data-path="src/components/Header.tsx">
              Share Your Story
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-id="iogduji85" data-path="src/components/Header.tsx">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[var(--grass-green)] transition-colors" data-id="1z0yhebvj" data-path="src/components/Header.tsx">

              {isMenuOpen ? <X size={24} data-id="ltf5vwxa6" data-path="src/components/Header.tsx" /> : <Menu size={24} data-id="sgrfzya9v" data-path="src/components/Header.tsx" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen &&
        <div className="md:hidden border-t border-gray-200" data-id="9icwg6uis" data-path="src/components/Header.tsx">
            <div className="px-2 pt-2 pb-3 space-y-1" data-id="rtw9cxwy4" data-path="src/components/Header.tsx">
              <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="c9ydzcg8b" data-path="src/components/Header.tsx">

                Home
              </a>
              <a
              href="/stories"
              className="block px-3 py-2 text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="eoczwznt0" data-path="src/components/Header.tsx">

                Stories
              </a>
              <a
              href="/submit"
              className="block px-3 py-2 text-gray-700 hover:text-[var(--grass-green)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }} data-id="7k0wu2sia" data-path="src/components/Header.tsx">

                Submit
              </a>
              <div className="px-3 py-2" data-id="3mcgl0wzr" data-path="src/components/Header.tsx">
                <button className="btn-primary w-full" data-id="73cagospt" data-path="src/components/Header.tsx">
                  Share Your Story
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Header;