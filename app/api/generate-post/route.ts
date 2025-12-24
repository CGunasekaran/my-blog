import { NextRequest, NextResponse } from "next/server";
import { scrapeAppMetadata } from "@/lib/scraper";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { url, title, slug } = await request.json();

    if (!url || !title || !slug) {
      return NextResponse.json(
        { error: "Missing required fields: url, title, slug" },
        { status: 400 }
      );
    }

    // Scrape app metadata
    const metadata = await scrapeAppMetadata(url);

    // Generate MDX content
    const mdxContent = `---
title: "${title}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${metadata.description || "A detailed look at this application."}"
image: "${metadata.ogImage || ""}"
tags: ${JSON.stringify(["web", "application"])}
featured: true
---

# ${title}

${metadata.description || ""}

## Overview

This application showcases modern web development practices and provides a great user experience.

## Features

- Modern and responsive design
- Optimized performance
- User-friendly interface
- Cross-browser compatibility

## Technology Stack

${
  metadata.technologies?.map((tech: string) => `- ${tech}`).join("\n") ||
  "- Modern web technologies"
}

## Live Demo

[Visit the live application](${url})

## Conclusion

This project demonstrates the effective use of modern web technologies to create a powerful and user-friendly application.
`;

    // Save to content/blog directory
    const contentDir = path.join(process.cwd(), "content", "blog");
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    const filePath = path.join(contentDir, `${slug}.mdx`);
    fs.writeFileSync(filePath, mdxContent);

    return NextResponse.json({
      success: true,
      message: "Blog post generated successfully",
      slug,
      filePath: `content/blog/${slug}.mdx`,
    });
  } catch (error) {
    console.error("Error generating post:", error);
    return NextResponse.json(
      {
        error: "Failed to generate blog post",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
