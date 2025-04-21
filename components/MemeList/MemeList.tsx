"use client";
import { Meme } from "@/types";
import MemeCard from "./MemeCard";
import { useEffect, useState } from "react";
import { getMemes } from "@/utils/storaje";
import { initialMemes } from "@/data/data";

export default function MemeList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = getMemes();
    setMemes(stored.length ? stored : initialMemes);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
