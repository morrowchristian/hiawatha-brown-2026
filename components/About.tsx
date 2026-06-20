export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Meet Hiawatha Brown</h2>

            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>Hiawatha Brown is a long‑time educator and community advocate who has served on the Cleveland Parks & Recreation Board and the Bradley Cleveland Community Services Agency...</p>

              <p>As an Inclusion Teacher at Bradley Central High School...</p>

              <p>Hiawatha is running for City Council District 1 to bring attention to long‑standing needs...</p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/hiawatha-brown.png" 
              alt="Hiawatha Brown" 
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
