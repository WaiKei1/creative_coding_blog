export default function Home() {
  return (
    <main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div class="text-center max-w-screen-md">
        <h1 class="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to Wai Kei's Coding Blog
        </h1>
        <p class="text-lg text-gray-700 mb-6">
          A place where I share my coding class adventures, projects, and fun
          bugs I (accidentally) create
        </p>
        <a
          href="/blog"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Go to Blog
        </a>
        <p class="mt-10 text-sm text-gray-500">
          Updated regularly with new lessons and experiments 💡
        </p>
      </div>
    </main>
  );
}
