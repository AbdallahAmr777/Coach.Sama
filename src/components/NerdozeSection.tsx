import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Instagram,
  Globe,
} from "lucide-react";
import nerdozeImg from "../assets/nerdose.jpg";

const NerdozeSection = () => {
  return (
    <section
      id="nerdoze"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#001d3d] via-[#003566] to-[#000814]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 pt-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003566]/25 to-transparent rounded-2xl"></div>
              <img
                src={nerdozeImg}
                alt="Nerdoze"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#000814] text-[#ffc300]">
              <GraduationCap size={18} />
              <span className="text-sm font-medium">Business Education</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#ffc300]">
              Nerdoze Academy
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-[#ffd60a]">
              Your gateway to business mastery. Nerdoze combines academic
              excellence with real-world experience to deliver transformative
              business education that drives results.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="rounded-xl p-6 shadow-lg bg-white/90 border-l-4 border-[#000814]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg text-white flex items-center justify-center flex-shrink-0 bg-[#000814]">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#000814]">
                      9 Years of Experience
                    </h3>
                    <p className="text-[#003566]">
                      Extensive hands-on experience working with diverse
                      companies across multiple industries, from startups to
                      established enterprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 shadow-lg bg-white/90 border-l-4 border-[#000814]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg text-white flex items-center justify-center flex-shrink-0 bg-[#000814]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#000814]">
                      Master's in Business Administration
                    </h3>
                    <p className="text-[#003566]">
                      Advanced academic credentials complementing practical
                      expertise, providing a comprehensive foundation for
                      business excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 shadow-lg bg-white/90 border-l-4 border-[#000814]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg text-white flex items-center justify-center flex-shrink-0 bg-[#000814]">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#000814]">
                      Strategic Business Growth
                    </h3>
                    <p className="text-[#003566]">
                      Proven methodologies for scaling businesses, optimizing
                      operations, and achieving sustainable growth in
                      competitive markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#ffd60a]">
              At Nerdoze, we don't just teach business theory—we share
              actionable strategies forged through years of real-world
              challenges and triumphs. Whether you're an entrepreneur,
              executive, or aspiring business professional, our courses are
              designed to accelerate your success.
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.instagram.com/nerdose.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.nerdose.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NerdozeSection;
