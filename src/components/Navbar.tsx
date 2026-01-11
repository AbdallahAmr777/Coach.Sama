import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Coach Sama" },
    { path: "/samafit", label: "Sama.fit" },
    { path: "/justagirl", label: "Just A Girl" },
    { path: "/nerdoze", label: "Nerdoze" },
  ];

  // Define color schemes for each page
  const getPageColors = () => {
    switch (location.pathname) {
      case "/samafit":
        return isScrolled
          ? {
              bg: "bg-[#caf0f8ff]",
              text: "text-[#0077b6ff]",
              hover: "hover:text-[#90e0efff]",
              active: "text-[#0077b6ff]",
              underline: "bg-[#0077b6ff]",
              mobileBg: "bg-[#caf0f8ff]",
              mobileText: "text-[#0077b6ff]",
              mobileHover: "hover:bg-[#90e0efff]/20",
            }
          : {
              bg: "bg-transparent",
              text: "text-[#0077b6ff]",
              hover: "hover:text-[#caf0f8ff]",
              active: "text-[#caf0f8ff]",
              underline: "bg-[#caf0f8ff]",
              mobileBg: "bg-transparent",
              mobileText: "text-[#0077b6ff]",
              mobileHover: "hover:bg-[#0077b6ff]/20",
            };
      case "/justagirl":
        return isScrolled
          ? {
              bg: "bg-[#fb6f92]",
              text: "text-white",
              hover: "hover:text-[#ffe5ec]",
              active: "text-white",
              underline: "bg-white",
              mobileBg: "bg-[#fb6f92]",
              mobileText: "text-white",
              mobileHover: "hover:bg-[#ff8fab]",
            }
          : {
              bg: "bg-transparent",
              text: "text-[#fb6f92]",
              hover: "hover:text-[#ffe5ec]",
              active: "text-[#ffe5ec]",
              underline: "bg-[#ffe5ec]",
              mobileBg: "bg-transparent",
              mobileText: "text-[#fb6f92]",
              mobileHover: "hover:bg-[#fb6f92]/20",
            };
      case "/nerdoze":
        return isScrolled
          ? {
              bg: "bg-[#ffc300]",
              text: "text-[#001d3d]",
              hover: "hover:text-[#001d3d]",
              active: "text-[#001d3d]",
              underline: "bg-[#001d3d]",
              mobileBg: "bg-[#ffc300]",
              mobileText: "text-[#001d3d]",
              mobileHover: "hover:bg-[#ffd60a]",
            }
          : {
              bg: "bg-transparent",
              text: "text-white",
              hover: "hover:text-[#001d3d]",
              active: "text-[#001d3d]",
              underline: "bg-[#001d3d]",
              mobileBg: "bg-transparent",
              mobileText: "text-[#001d3d]",
              mobileHover: "hover:bg-[#ffd60a]/20",
            };
      default: // Home
        return isScrolled
          ? {
              bg: "bg-white",
              text: "text-black",
              hover: "hover:text-gray-700",
              active: "text-black",
              underline: "bg-black",
              mobileBg: "bg-white",
              mobileText: "text-black",
              mobileHover: "hover:bg-gray-200",
            }
          : {
              bg: "bg-transparent",
              text: "text-white",
              hover: "hover:text-gray-300",
              active: "text-white",
              underline: "bg-white",
              mobileBg: "bg-transparent",
              mobileText: "text-white",
              mobileHover: "hover:bg-black/20",
            };
    }
  };

  const colors = getPageColors();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-lg ${colors.bg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center relative">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? `${colors.active} ${colors.text}`
                    : `${colors.text} ${colors.hover}`
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${colors.underline}`}
                  ></span>
                )}
              </Link>
            ))}
          </div>

          <button
            className={`md:hidden absolute right-6 transition-colors ${colors.text}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-3 rounded-lg transition-all text-lg font-medium ${
                  location.pathname === item.path
                    ? item.path === "/nerdoze"
                      ? `${colors.mobileBg} ${colors.mobileText} border-2 border-[#001d3d]`
                      : `${colors.mobileBg} ${colors.mobileText}`
                    : item.path === "/nerdoze"
                    ? `text-[#001d3d] hover:bg-gray-100 ${colors.mobileHover}`
                    : `text-slate-700 hover:bg-gray-100 ${colors.mobileHover}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
