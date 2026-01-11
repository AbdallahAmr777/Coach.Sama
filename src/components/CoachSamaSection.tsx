import coachSamaImg from "../assets/frist_page.jpg";
import samaFitLogo from "../assets/Sama fit logo.gif";
import justAGirlLogo from "../assets/Just a girl logo.gif";
import nerdozeLogo from "../assets/Nerdose logo.gif";
import { Facebook, Instagram } from "lucide-react";

const CoachSamaSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 pt-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Coach Sama
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Welcome to the world of transformation and leadership. I'm Sama
              Foad, an entrepreneur, businesswoman, and coach dedicated to
              empowering individuals to reach their fullest potential.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              My journey has been defined by a relentless pursuit of excellence,
              blending strategic business insights with transformative coaching
              methodologies. I believe that true success comes from aligning
              your mindset with purposeful action, and I'm here to guide you
              every step of the way.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Through my brands—Sama.fit, Just A Girl, and Nerdoze—I've built a
              multi-dimensional platform that touches lives across fitness,
              beauty, and business education. Each brand represents a facet of
              my mission: to inspire, educate, and elevate.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                My Brands
              </h3>
              <div className="flex flex-wrap gap-8 mb-6">
                  <img
                    src={samaFitLogo}
                    alt="Sama.fit"
                    className="h-16 w-auto hover:scale-110 transition-transform cursor-pointer"
                  />
                  <img
                    src={justAGirlLogo}
                    alt="Just A Girl"
                    className="h-16 w-auto hover:scale-110 transition-transform cursor-pointer"
                  />
                  <img
                    src={nerdozeLogo}
                    alt="Nerdoze"
                    className="h-16 w-auto hover:scale-110 transition-transform cursor-pointer"
                  />
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/CoachSama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/CoachSama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 to-transparent rounded-2xl"></div>
              <img
                src={coachSamaImg}
                alt="Coach Sama"
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

export default CoachSamaSection;
