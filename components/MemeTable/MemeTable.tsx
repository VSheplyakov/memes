"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { initialMemes } from "@/data/data";
import { Meme } from "@/types";
import { getMemes, setMemes } from "@/utils/storaje";
import MemeEditModal from "./MemeEditModat";

export default function MemeTable() {
  const [memes, setLocalMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = getMemes();
    setLocalMemes(stored.length ? stored : initialMemes);
  }, []);

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const handleSave = (updated: Meme) => {
    const updatedList = memes.map((m) => (m.id === updated.id ? updated : m));
    setLocalMemes(updatedList);
    setMemes(updatedList);
    setIsModalOpen(false);
  };

  return (
    <>
      <Table isCompact aria-label="Meme Table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>
                <span className="line-clamp-2">{meme.title}</span>
              </TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button size="sm" onPress={() => handleEdit(meme)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedMeme && (
        <MemeEditModal
          isOpen={isModalOpen}
          meme={selectedMeme}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
