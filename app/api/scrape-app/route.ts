import { NextRequest, NextResponse } from 'next/server';
import { scrapeAppMetadata, extractProfileImage } from '@/lib/scraper';

export async function POST(request: NextRequest) {
  try {
    const { url, type } = await request.json();

    if (type === 'profile') {
      const profileImage = await extractProfileImage(url);
      return NextResponse.json({ profileImage });
    }

    const metadata = await scrapeAppMetadata(url);
    return NextResponse.json(metadata);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to scrape URL' },
      { status: 500 }
    );
  }
}
