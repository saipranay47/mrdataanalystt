"use client";

import { useState } from "react";
import { VideoGrid } from "./video-grid";
const videos = [
  {
    id: 1,
    title:
      "Create a Stunning Airbnb Hotels Dashboard in Power BI | Step-by-Step Tutorial",
    thumbnail: "https://i.ytimg.com/vi/IYFYbzZYROg/hqdefault.jpg",
    views: "403",
    duration: "15:02",
    date: "2024-01-15",
    categories: ["powerbi", "dashboard", "tutorial"],
    description:
      "Learn how to create a professional Airbnb dashboard using Power BI with step-by-step guidance.",
  },
  {
    id: 2,
    title:
      "🔥 Best Resume Project for Data Analysts! | Amazon Prime Data Analysis",
    thumbnail: "https://i.ytimg.com/vi/KMDfqiu4Gc0/hqdefault.jpg",
    views: "271",
    duration: "25:47",
    date: "2023-12-15",
    categories: ["analysis", "powerbi"],
    description:
      "Build an impressive resume project analyzing Amazon Prime data using Power BI.",
  },
  {
    id: 3,
    title: "Master Car Sales Data Analysis: Build Dynamic Power BI Dashboard",
    thumbnail: "https://i.ytimg.com/vi/X6x-oguQziQ/hqdefault.jpg",
    views: "2.8K",
    duration: "25:05",
    date: "2023-12-01",
    categories: ["powerbi", "dashboard", "analysis"],
    description:
      "Create a dynamic car sales dashboard and learn advanced Power BI techniques.",
  },
  {
    id: 4,
    title: "2024 Indian Election Power BI Dashboard🔥 | Perfect Resume Project",
    thumbnail: "https://i.ytimg.com/vi/88ADI5Rc1DU/hqdefault.jpg",
    views: "605",
    duration: "42:37",
    date: "2023-11-15",
    categories: ["powerbi", "dashboard", "analysis"],
    description:
      "Analyze election data and create an impressive dashboard for your portfolio.",
  },
  {
    id: 5,
    title:
      "Netflix Dashboard in Power BI | Best Resume Project for Data Analysis",
    thumbnail: "https://i.ytimg.com/vi/2ae2aqxuPcg/hqdefault.jpg",
    views: "1.3K",
    duration: "13:01",
    date: "2023-11-01",
    categories: ["powerbi", "dashboard", "analysis"],
    description:
      "Build a Netflix dashboard using Power BI and enhance your resume.",
  },
];

export function VideoSection() {
  const [filter, setFilter] = useState("all");

  const filteredVideos = videos.filter((video) =>
    filter === "all" ? true : video.categories.includes(filter)
  );

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Videos
          </h2>
          <p className="text-muted-foreground">
            Explore my collection of Power BI tutorials, dashboard creations,
            and data analysis projects. Each video is designed to help you
            master data visualization and analysis.
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-8">
          <VideoGrid videos={filteredVideos} />
        </div>
      </div>
    </section>
  );
}
