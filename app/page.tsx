'use client';

import LeftSidebar from '@/components/LeftSidebar';
import Live from '@/components/Live';
import Navbar from '@/components/Navbar';
import RightSidebar from '@/components/RightSidebar';
import { CustomFabricObject } from '@/types/type';
import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from '@/lib/canvas';

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>('rectangle');

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on('mouse:down', (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });

    window.addEventListener('resize', () => {
      handleResize({ fabricRef });
    });
  }, []);

  return (
    <div className="">
      <main className="h-screen overflow-hidden">
        <Navbar />
        <section className="flex flex-row h-full">
          <LeftSidebar />
          <Live canvasRef={canvasRef} />
          <RightSidebar />
        </section>
      </main>
    </div>
  );
}
