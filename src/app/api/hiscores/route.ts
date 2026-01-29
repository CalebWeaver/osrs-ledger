import { NextRequest, NextResponse } from 'next/server';

const HISCORES_URL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.json';

export async function GET(request: NextRequest) {
  const player = request.nextUrl.searchParams.get('player');
  if (!player) {
    return NextResponse.json({ error: 'Missing player parameter' }, { status: 400 });
  }

  const url = `${HISCORES_URL}?player=${encodeURIComponent(player)}`;
  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json(
      { error: res.status === 404 ? 'Player not found' : 'Hiscores unavailable' },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
