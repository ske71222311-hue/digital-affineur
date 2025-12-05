import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI.Ripening - ИИ-технолог для созревания сыра",
    short_name: "AI.Ripening",
    description: "Снижаем брак с 30% до 5%. Первая в России ИИ-система управления созреванием сыра.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A2463",
    theme_color: "#0A2463",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity", "food"],
    lang: "ru",
    dir: "ltr",
  };
}


