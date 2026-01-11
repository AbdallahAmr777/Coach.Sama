import { Sparkles, Facebook, Instagram, Globe } from "lucide-react";
import justAGirlImg from "../assets/just_a_girl.jpg";

const JustAGirlSection = () => {
  return (
    <section
      id="justagirl"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#ffe5ec] via-[#ffc2d1] to-[#ffb3c6] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ffc2d1] text-[#fb6f92]">
              <Sparkles size={18} />
              <span className="text-sm font-medium">Beauty & Self-Care</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#fb6f92]">
              Just A Girl
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-[#ff8fab]">
              A celebration of femininity, confidence, and self-love. Just A
              Girl is a beauty and cosmetics brand dedicated to helping women
              feel beautiful, empowered, and unapologetically themselves.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-[#fb6f92]">
              In a world that constantly tells women who they should be, we
              believe in the power of self-care as an act of self-respect. Our
              carefully curated products and beauty philosophies help you
              embrace your unique beauty while nurturing your confidence from
              within.
            </p>

            <div className="rounded-xl p-8 mb-8 shadow-lg bg-white/90 border border-[#ffc2d1]">
              <h3 className="text-2xl font-semibold mb-4 text-[#fb6f92]">
                Our Philosophy
              </h3>
              <p className="leading-relaxed mb-4 text-[#ff8fab]">
                Beauty is not about perfection—it's about authenticity. It's
                about taking time for yourself, celebrating your femininity, and
                showing up as the best version of who you truly are.
              </p>
              <p className="italic text-[#ffb3c6]">
                "Self-care is not selfish. It's essential."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all bg-[#fb6f92]">
                Skincare
              </div>
              <div className="px-6 py-3 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all bg-[#ff8fab]">
                Cosmetics
              </div>
              <div className="px-6 py-3 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all bg-[#ffb3c6]">
                Self-Care
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61564645124575"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/justagirl.beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.justagirl-eg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffc2d1]/25 to-transparent rounded-2xl"></div>
              <img
                src={justAGirlImg}
                alt="Just A Girl"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustAGirlSection;
