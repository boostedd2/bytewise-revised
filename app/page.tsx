import { Button } from "@/components/base/buttons/button";

export default function Home() {
  return (
    <main className="min-h-screen max-w-container mx-auto">
      <section className="flex flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight"></h1>

          <p className="mt-6 text-lg leading-relaxed">
            Bytewise is a personal space for experimenting with different types
            of technology. Usually something that involves software development,
            system design, or infrastructure. May involve breaking stuff here or
            there if we're being honest.
          </p>

          <div className="mt-8 flex gap-4">
            <Button color="primary" size="lg" href="/blog">
              Explore Content
            </Button>

            <Button color="primary" size="lg" href="/blog">
              Got a Question?
            </Button>
          </div>
        </div>
      </section>

      <hr className="text-slate-100 max-w-150" />

      <section className="py-20 px-6">
        <div className="w-full">
          <h2 className="text-2xl mb-10">What's new</h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img
                src="/images/post-1.jpg"
                alt="Post preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  Introducing the new homelab setup
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-1">
                  A step-by-step breakdown of the new infrastructure powering my
                  dev environment.
                </p>
                <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img
                src="/images/post-2.jpg"
                alt="Post preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  Exploring application architecture
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-1">
                  Diving deeper into system design patterns and how they shape
                  scalability.
                </p>
                <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
