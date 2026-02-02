export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase">
          Your Personal Morning Paper
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
          The newspaper, reinvented for you
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Remember when mornings meant coffee and the paper? We're bringing that back. 
          An AI-curated briefing written just for you, with the stories and insights 
          that actually matter to your life and work.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-sm text-gray-500">
          Free during beta. No spam, ever.
        </p>
      </section>

      {/* The Problem with News Today */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">The news is broken</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Newspapers died. What replaced them? Infinite feeds designed to steal your attention, 
            not inform you. Algorithms that optimize for clicks, not insight.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">One-size-fits-all</h3>
              <p className="text-gray-600">
                Everyone sees the same trending topics. Nothing about your industry, your interests, your context.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔊</div>
              <h3 className="font-semibold mb-2">Noise, not signal</h3>
              <p className="text-gray-600">
                Hot takes. Outrage bait. The same story rewritten 50 times. Where's the actual insight?
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold mb-2">Time black hole</h3>
              <p className="text-gray-600">
                You opened Twitter to check one thing. It's been 45 minutes. You still don't know what you came for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Personalization */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A paper that knows you</h2>
              <p className="text-gray-600 mb-4">
                Daily Digest learns what matters to you. Not just topics you follow, but 
                <span className="font-semibold"> the context of your life</span>: your role, 
                your goals, what you're working on.
              </p>
              <p className="text-gray-600 mb-4">
                A mobile engineer job hunting sees different stories than a VC looking for deals. 
                A value investor gets different market coverage than a crypto trader.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Your digest is yours alone.</span> Written for an audience of one.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="text-sm text-gray-500 mb-2">EXAMPLE PERSONALIZATION</div>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded-lg">
                  <span className="font-semibold">You:</span> "Mobile engineer, 6 years React Native, job searching for AI roles"
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <span className="font-semibold">Your digest includes:</span>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• AI companies hiring mobile engineers</li>
                    <li>• React Native + ML integration tutorials</li>
                    <li>• Startups building AI-native mobile apps</li>
                    <li>• Interview prep for your target companies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight, Not Just Summaries */}
      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <div className="text-xs text-gray-400 mb-3 uppercase tracking-wide">From your digest</div>
                <div className="border-l-4 border-blue-500 pl-4 mb-4">
                  <p className="text-gray-300 mb-2">
                    "Vercel just raised $250M at a $3.2B valuation. <span className="text-white font-medium">Why this matters for you:</span> They're 
                    expanding their AI product team, and your React Native + AI background is exactly 
                    what they're looking for in their mobile push. Three roles match your profile."
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  vs. a normal headline: "Vercel Raises $250M Series D"
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Insight, not just information</h2>
              <p className="text-gray-400 mb-4">
                Anyone can summarize an article. We go further: 
                <span className="text-white font-semibold"> what does this mean for you specifically?</span>
              </p>
              <p className="text-gray-400 mb-4">
                Every story connects back to your goals. Funding news becomes job leads. 
                Tech trends become skill recommendations. Market moves become action items.
              </p>
              <p className="text-gray-400">
                It's like having a brilliant friend who reads everything and tells you only what you need to know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Morning Ritual */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bring back the morning ritual</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            There was something sacred about morning coffee and the newspaper. 
            A finite, curated window into the world. Not an infinite scroll, but a beginning, 
            middle, and end. We're bringing that back.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl mb-4">☕</div>
              <h3 className="font-semibold mb-2">6 AM in your inbox</h3>
              <p className="text-gray-600">
                Wake up to a finished paper, not a feed. Ready when you are.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-semibold mb-2">5 minutes to informed</h3>
              <p className="text-gray-600">
                Designed to be read, not scrolled. A complete picture, not endless fragments.
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-semibold mb-2">Done. Move on.</h3>
              <p className="text-gray-600">
                When you finish, you're finished. No guilt. No FOMO. You got what you needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What's in your digest</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose your sections. Each one tailored to your context.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">📰</div>
              <div>
                <h3 className="font-semibold">Headlines</h3>
                <p className="text-gray-600 text-sm">The stories everyone's talking about, filtered for your interests.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">💰</div>
              <div>
                <h3 className="font-semibold">Funding & Startups</h3>
                <p className="text-gray-600 text-sm">Who raised, who launched. With context on what it means for your space.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="font-semibold">Job Market</h3>
                <p className="text-gray-600 text-sm">Roles that match your profile. Hiring trends in your industry.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">🎬</div>
              <div>
                <h3 className="font-semibold">YouTube Digest</h3>
                <p className="text-gray-600 text-sm">Key insights from creators you follow. 40-min videos in 2-min reads.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="font-semibold">Market Pulse</h3>
                <p className="text-gray-600 text-sm">Your watchlist, explained. What moved and why it matters.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">🔬</div>
              <div>
                <h3 className="font-semibold">Deep Dive</h3>
                <p className="text-gray-600 text-sm">One long-form piece, distilled. The depth without the time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Your paper is waiting</h2>
          <p className="text-gray-400 mb-8">
            Join the waitlist. Be first to get a news experience built around you.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-500">
            Free during beta. $5/month after (early adopter price, locked forever).
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Daily Digest. The newspaper, reinvented.</p>
      </footer>
    </main>
  );
}
