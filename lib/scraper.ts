import axios from "axios";
import * as cheerio from "cheerio";
import { ScrapedMetadata } from "@/types";

export async function scrapeAppMetadata(url: string): Promise<ScrapedMetadata> {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; BlogBot/1.0)",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(data);

    // Extract metadata
    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      "Untitled";

    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "";

    const ogImage =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      "";

    const favicon =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href") ||
      "/favicon.ico";

    // Detect technologies from meta tags and scripts
    const technologies = detectTechnologies($, data);

    return {
      title,
      description,
      ogImage: ogImage ? new URL(ogImage, url).href : undefined,
      favicon: favicon ? new URL(favicon, url).href : undefined,
      technologies,
    };
  } catch (error) {
    console.error(`Failed to scrape ${url}:`, error);
    return {
      title: "Unable to fetch",
      description: "",
      technologies: [],
    };
  }
}

function detectTechnologies(
  $: ReturnType<typeof cheerio.load>,
  html: string
): string[] {
  const techs: Set<string> = new Set();

  // Check for Next.js
  if (html.includes("__NEXT_DATA__") || $('script[src*="_next"]').length > 0) {
    techs.add("Next.js");
    techs.add("React");
  }

  // Check for React
  if (html.includes("react") || $('script[src*="react"]').length > 0) {
    techs.add("React");
  }

  // Check for TypeScript
  if (html.includes("typescript") || $('script[type="module"]').length > 0) {
    techs.add("TypeScript");
  }

  // Check for Tailwind
  if (html.includes("tailwind") || $('link[href*="tailwind"]').length > 0) {
    techs.add("Tailwind CSS");
  }

  // Check for Socket.io
  if (html.includes("socket.io") || $('script[src*="socket.io"]').length > 0) {
    techs.add("Socket.io");
  }

  // Check for Vercel
  if (html.includes("vercel")) {
    techs.add("Vercel");
  }

  return Array.from(techs);
}

export async function extractProfileImage(
  portfolioUrl: string
): Promise<string> {
  try {
    const { data } = await axios.get(portfolioUrl);
    const $ = cheerio.load(data);

    // Try to find profile image
    const profileImage =
      $('img[alt*="profile" i]').attr("src") ||
      $('img[alt*="avatar" i]').attr("src") ||
      $('img[class*="profile" i]').attr("src") ||
      $('img[class*="avatar" i]').attr("src") ||
      $(".profile img").attr("src") ||
      $('meta[property="og:image"]').attr("content") ||
      "";

    if (profileImage) {
      return new URL(profileImage, portfolioUrl).href;
    }

    return "";
  } catch (error) {
    console.error("Failed to extract profile image:", error);
    return "";
  }
}
