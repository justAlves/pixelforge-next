"use client";

import { getCurrentWindow,  } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

export default function TitleBar() {
  
  const [isTauri, setIsTauri] = useState(false);

  useEffect(() => {
    async function checkTauri() {
      try {
        getCurrentWindow();
        setIsTauri(true);
      } catch {
        setIsTauri(false);
      }
    }

    checkTauri();
  }, [])

  if (!isTauri) {
    return null;
  }

  const appWindow = getCurrentWindow();

  return (
    <div
      data-tauri-drag-region
      className="flex items-center justify-center px-4 py-2 w-full bg-black/85 text-white select-none fixed"
    >
      <div className="absolute left-4 flex space-x-2">
        <button
          onClick={() => appWindow.close()}
          className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600"
        />
        <button
          onClick={() => appWindow.minimize()}
          className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600"
        />
        <button
          onClick={() => appWindow.toggleMaximize()}
          className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600"
        />
      </div>
      <span className="text-sm font-semibold">PixelForge</span>
    </div>
  );
}