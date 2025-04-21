"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Meme } from "@/types";

interface Props {
  isOpen: boolean;
  meme: Meme;
  onClose: () => void;
  onSave: (updated: Meme) => void;
}

export default function MemeEditModal({
  isOpen,
  meme,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState(meme.title);
  const [image, setImage] = useState(meme.image);
  const [likes, setLikes] = useState(meme.likes.toString());
  const [errors, setErrors] = useState<{
    title?: string;
    image?: string;
    likes?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (title.length < 3 || title.length > 100)
      newErrors.title = "Title must be 3–100 chars";
    const imageUrlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i;
    if (!imageUrlRegex.test(image)) {
      newErrors.image =
        "Image URL must start with http(s) and end with .jpg/.png/etc";
    }
    if (!/^\d{1,2}$/.test(likes))
      newErrors.likes = "Likes must be a number from 0 to 99";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave({
      ...meme,
      title,
      image,
      likes: parseInt(likes),
    });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Edit Meme #{meme.id}</ModalHeader>
        <ModalBody>
          <Input
            label="Title"
            value={title}
            onValueChange={setTitle}
            isInvalid={!!errors.title}
            errorMessage={errors.title}
            type="text"
          />
          <Input
            label="Image URL"
            value={image}
            onValueChange={setImage}
            isInvalid={!!errors.image}
            errorMessage={errors.image}
            type="url"
          />
          <Input
            label="Likes"
            value={likes}
            onValueChange={setLikes}
            type="number"
            isInvalid={!!errors.likes}
            errorMessage={errors.likes}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="flat" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
