'use client';

import { ClientSideSuspense } from '@liveblocks/react';

import { CommentsOverlay } from '@/components/Comments/CommentsOverlay';

export const Comments = () => (
  <ClientSideSuspense fallback={null}>
    {() => <CommentsOverlay />}
  </ClientSideSuspense>
);
