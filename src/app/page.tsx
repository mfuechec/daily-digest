export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">Daily Digest</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-lg">
        Your AI reads the internet so you don't have to.
        Personalized news, delivered daily.
      </p>
      
      <form className="flex gap-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border rounded-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Join Waitlist
        </button>
      </form>
      
      <p className="mt-4 text-sm text-gray-500">
        Free during beta. No spam, ever.
      </p>
    </main>
  );
}
