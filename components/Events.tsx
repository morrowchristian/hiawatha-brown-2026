export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Updates</h2>

        <div className="max-w-3xl mx-auto">
          <div 
            className="fb-page" 
            data-href="https://www.facebook.com/profile.php?id=61567583096946"
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          />
        </div>

        <p className="text-center mt-10 text-gray-500">
        Can't see the feed or want to be notified the moment we post?{" "}
        <a
            href="https://www.facebook.com/profile.php?id=61567583096946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e91e63] font-semibold hover:underline"
        >
            Follow us on Facebook
        </a>{" "}
        to get instant updates on events, announcements, and campaign news delivered straight to your feed.
        </p>
      </div>
    </section>
  );
}
