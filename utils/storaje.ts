import { Meme } from "@/types";

const STORAGE_KEY = "memes";

export const getMemes = (): Meme[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setMemes = (memes: Meme[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memes));
};
