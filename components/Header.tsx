"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-black/20 group-hover:shadow-black/40 group-hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-2xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Gunasekaran
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative px-5 py-2.5 font-semibold rounded-xl transition-all duration-300 group overflow-hidden ${
                  isActive(item.href) ? "text-white" : "text-slate-200"
                }`}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-500 rounded-xl transition-opacity duration-300 transform group-hover:scale-100 scale-95 ${
                    isActive(item.href)
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/CGunasekaran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-slate-950/95 rounded-b-xl -mx-4 px-4 mt-2">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-sky-500 to-violet-500"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 px-4">
                <a
                  href="https://github.com/CGunasekaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-lg bg-white/5 text-slate-100 flex items-center justify-center gap-2 font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-lg bg-white/5 text-slate-100 flex items-center justify-center gap-2 font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
