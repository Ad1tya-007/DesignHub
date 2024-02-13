'use client';

import { useOthers } from '../liveblocks.config';

export function CollaborativeApp() {
  const others = useOthers();
  console.log('🚀 ~ CollaborativeApp ~ others:', others);
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}
