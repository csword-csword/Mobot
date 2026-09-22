import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { REPORT_ACCESS_COOKIE } from '@/lib/hubspot';

const REPORT_RELATIVE = path.join('content', 'reports', 'mobot-annual-defect-report.html');
const FILENAME = 'mobot-annual-defect-report.html';

export async function GET(request: NextRequest) {
  const access = request.cookies.get(REPORT_ACCESS_COOKIE)?.value;
  if (access !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const filePath = path.join(process.cwd(), REPORT_RELATIVE);
    const html = await readFile(filePath);

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `inline; filename="${FILENAME}"`,
        'Cache-Control': 'private, no-store',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Report unavailable' }, { status: 500 });
  }
}
