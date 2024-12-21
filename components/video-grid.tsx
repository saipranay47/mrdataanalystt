import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  date: string;
  description: string;
}

export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden group">
          <CardContent className="p-0">
            <Link href={`#video-${video.id}`} className="block">
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {/* <Play className="w-12 h-12 text-white" /> */}
                  {/* https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_640.png */}
                  <Image
                    src="https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_640.png"
                    alt="play"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {video.views} views •{" "}
                  {new Date(video.date).toLocaleDateString()}
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
