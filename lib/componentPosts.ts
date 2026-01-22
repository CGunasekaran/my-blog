import type { BlogPost } from "@/types";
import EcommercePlatformPart1 from "@/components/posts/EcommercePlatformPart1";
import EcommercePlatformPart2 from "@/components/posts/EcommercePlatformPart2";
import { ECOMMERCE_PLATFORM_PART1_MARKDOWN } from "@/content/blog/ecommerce-platform.content";
import { ECOMMERCE_PLATFORM_PART2_MARKDOWN } from "@/content/blog/ecommerce-platform-performance.content";

const author = {
  name: "Gunasekaran",
  avatar: "/profile.jpg",
  bio: "",
  role: "",
  social: {},
};

export const componentPosts: BlogPost[] = [
  {
    slug: "ecommerce-platform",
    title: "Building a Modern E-Commerce Platform with Next.js",
    description:
      "A complete series (Part 1): architecture & foundation decisions for a production-grade e-commerce platform with Next.js App Router.",
    content: ECOMMERCE_PLATFORM_PART1_MARKDOWN,
    appId: "ecommerce",
    coverImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600",
    author,
    publishedAt: "2024-02-01",
    updatedAt: "2026-01-22",
    tags: [
      "Next.js",
      "E-Commerce",
      "TypeScript",
      "Architecture",
      "Performance",
    ],
    readTime: 0,
    featured: true,
    contentComponent: EcommercePlatformPart1,
  },
  {
    slug: "ecommerce-platform-performance",
    title:
      "Building a Modern E-Commerce Platform with Next.js (Part 2): Performance Optimization Strategies",
    description:
      "Part 2 of the series: a decision framework for ISR/SSG/SSR, streaming with Suspense, image optimization, edge patterns, and caching strategies.",
    content: ECOMMERCE_PLATFORM_PART2_MARKDOWN,
    appId: "ecommerce",
    coverImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600",
    author,
    publishedAt: "2026-01-22",
    tags: [
      "Next.js",
      "E-Commerce",
      "Performance",
      "ISR",
      "SSR",
      "SSG",
      "Edge",
      "Caching",
    ],
    readTime: 0,
    featured: true,
    contentComponent: EcommercePlatformPart2,
  },
];

export function isComponentPostSlug(slug: string): boolean {
  return componentPosts.some((p) => p.slug === slug);
}

export function getComponentPostBySlug(slug: string): BlogPost | null {
  const normalized = slug.replace(/\.(mdx|md)$/i, "");
  return componentPosts.find((p) => p.slug === normalized) ?? null;
}
