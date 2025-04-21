"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Meme } from "@/types";

interface MemeCardProps {
  meme: Meme;
}

export default function MemeCard({ meme }: MemeCardProps) {
  return (
    <Card className="w-full shadow-md hover:shadow-xl dark:shadow-white/10 hover:dark:shadow-white/10">
      <CardHeader className="justify-center p-0">
        <Image
          src={meme.image}
          alt={meme.title}
          className="w-full aspect-[3/3] object-cover rounded-none"
        />
      </CardHeader>
      <CardBody>
        <p className="text-lg font-semibold line-clamp-2">{meme.title}</p>
      </CardBody>
      <CardFooter className="flex justify-between gap-2">
        <Link
          href={meme.image}
          isExternal
          color="primary"
          className="text-sm font-medium"
        >
          View Full Image
        </Link>
        <div className="flex items-center gap-2">
          <Image src="/like.svg" alt="heart" width={16} height={16} />
          <p className="text-sm text-gray-500"> {meme.likes} likes</p>
        </div>
      </CardFooter>
    </Card>
  );
}
