"use client";

import { Author } from "@/types";
import Image from "next/image";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

interface ProfileSectionProps {
  author: Author;
}

export default function ProfileSection({ author }: ProfileSectionProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-36 h-36 rounded-full border-4 border-white shadow-2xl overflow-hidden ring-4 ring-white/30">
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={144}
                  height={144}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-bold text-white drop-shadow-lg">
                    {author.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {author.name}
            </h2>
            <p className="text-blue-100 text-xl mb-4 font-semibold">
              {author.role}
            </p>
            <p className="text-white/95 text-lg mb-6 max-w-2xl leading-relaxed">
              {author.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {author.social.github && (
                <a
                  href={author.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-purple-600 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-purple-600 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {author.social.website && (
                <a
                  href={author.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-purple-600 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="Website"
                >
                  <Globe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
