// components/GetInvolved.tsx
import { ArrowRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-[#e91e63] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Every volunteer, yard sign, conversation, and donation helps bring strong leadership to District 1.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://forms.gle/998kKakUn9gtDVyQ8" target="_blank" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95">
            Volunteer
          </a>

          <a href="https://forms.gle/FTi7nzcnCz2SbUpK8" target="_blank" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-2 group">
            Donate to the Campaign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="https://forms.gle/VHcBeQaVdwaVo3rr8" target="_blank" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95">
            Request Yard Signs
          </a>
        </div>

        <p className="mt-10 text-sm opacity-75 max-w-md mx-auto">
          We are currently setting up official donation channels. Thank you for your support — we will follow up with you soon.
        </p>
      </div>
    </section>
  );
}
