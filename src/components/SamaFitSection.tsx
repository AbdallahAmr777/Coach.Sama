import {
  ExternalLink,
  Dumbbell,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";
import samaFitImg from "../assets/samafit.jpg";

const SamaFitSection = () => {
  return (
    <section
      id="samafit"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#caf0f8ff] via-[#90e0efff] to-[#00b4d8ff]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 pt-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6ff]/25 to-transparent rounded-2xl"></div>
              <img
                src={samaFitImg}
                alt="sama.fit"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 95%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 90%)",
                }}
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#03045eff] text-[#0077b6ff]">
              <Dumbbell size={20} />
              <span className="text-sm font-medium">Fitness & Wellness</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#023e8a]">
              Sama.fit
            </h2>

            <p className="text-xl mb-8 leading-relaxed text-[#0077b6ff]">
              Transform your life through the power of fitness and health.
              Sama.fit is more than a fitness brand—it's a lifestyle movement
              designed for those ready to take control of their health and
              wellness journey.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-[#03045efe]">
              We believe that consistency is the foundation of transformation.
              Whether you're starting your fitness journey or looking to elevate
              your performance, Sama.fit provides the guidance, motivation, and
              community support you need to succeed.
            </p>

            <div className="backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg bg-white/90 border border-[#90e0efff]">
              <h3 className="text-2xl font-semibold mb-4 text-[#03045eff]">
                Our Mission
              </h3>
              <p className="leading-relaxed text-[#0077b6ff]">
                To empower individuals to build healthier, stronger, and more
                confident versions of themselves through sustainable fitness
                practices, expert guidance, and unwavering support.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#03045eff]">
                Explore Sama.fit
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61558434380452&ref=pro_upsell_xav_ig_profile_page_web#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105 bg-[#03045eff] hover:bg-[#0077b6ff]"
                >
                  <Facebook size={16} />
                  {/* <span>Facebook</span> */}
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.instagram.com/samafit.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105 bg-[#0077b6ff] hover:bg-[#00b4d8ff]"
                >
                  <Instagram size={16} />
                  {/* <span>Instagram</span> */}
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.samafit.net/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105 bg-[#03045eff] hover:bg-[#0077b6ff]"
                >
                  <Globe size={16} />
                  {/* <span>Programs</span> */}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamaFitSection;
