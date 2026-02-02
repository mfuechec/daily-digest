export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase">
          AI-Powered News Curation
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
          Your AI reads the internet so you don't have to
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Stop drowning in tabs. Get a personalized daily briefing with only the news 
          that matters to you, summarized and delivered to your inbox every morning.
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

      {/* Problem Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">20+ tabs open</h3>
              <p className="text-gray-600">
                Hacker News, Twitter, Reddit, newsletters... you're subscribed to everything but reading nothing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold mb-2">Hours lost scrolling</h3>
              <p className="text-gray-600">
                You meant to spend 10 minutes catching up. It's been 2 hours and you're reading about medieval swords.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">😰</div>
              <h3 className="font-semibold mb-2">Fear of missing out</h3>
              <p className="text-gray-600">
                Did you miss that important announcement? That funding round? That job posting? Who knows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Tell us your interests</h3>
              <p className="text-gray-600">
                Pick your topics, add your favorite sources, and tell us what you care about.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">AI does the reading</h3>
              <p className="text-gray-600">
                We scan hundreds of sources, filter the noise, and summarize what matters.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Wake up informed</h3>
              <p className="text-gray-600">
                Get a personalized briefing in your inbox every morning. 5 minutes to fully caught up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Sections */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What's in your digest</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the sections that matter to you. Skip the rest.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">📰</div>
              <div>
                <h3 className="font-semibold">Headlines</h3>
                <p className="text-gray-600 text-sm">Top stories from Hacker News, TechCrunch, and more. The stuff everyone's talking about.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">💰</div>
              <div>
                <h3 className="font-semibold">Funding & Startups</h3>
                <p className="text-gray-600 text-sm">Who raised, who launched, who's hiring. Stay ahead of the startup world.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="font-semibold">Job Market</h3>
                <p className="text-gray-600 text-sm">Hiring trends, interesting job posts, layoff news. Know where the opportunities are.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">🎬</div>
              <div>
                <h3 className="font-semibold">YouTube Digest</h3>
                <p className="text-gray-600 text-sm">Summaries from channels you follow. Get the insights without the 40-minute watch time.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="font-semibold">Market Pulse</h3>
                <p className="text-gray-600 text-sm">Movements in stocks and crypto you care about. No noise, just your watchlist.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-5 rounded-xl">
              <div className="text-2xl">🔬</div>
              <div>
                <h3 className="font-semibold">Deep Dive</h3>
                <p className="text-gray-600 text-sm">One long-form piece summarized. For when you want depth without the time commitment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Built for people who value their time</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600">5 min</div>
              <p className="text-gray-600">Average read time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">100+</div>
              <p className="text-gray-600">Sources monitored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">6 AM</div>
              <p className="text-gray-600">In your inbox daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to reclaim your mornings?</h2>
          <p className="text-gray-400 mb-8">
            Join the waitlist and be first to try Daily Digest when we launch.
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
        <p>© 2026 Daily Digest. Built with ☕ and AI.</p>
      </footer>
    </main>
  );
}
