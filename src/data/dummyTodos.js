// Struktur data mengikuti atribut kuis (sama dengan struktur REST API nanti)
export const dummyTodos = [
  {
    id: 1,
    title: "Mempelajari React Hooks",
    description: "Pelajari useState, useEffect, useContext, dan custom hooks.",
    priority: "low",
    deadline: "2026-10-11",
    status: "to-do",
  },
  {
    id: 2,
    title: "Membuat Website Portfolio",
    description: "Buat website portfolio pribadi berisi profil dan proyek.",
    priority: "low",
    deadline: "2026-10-20",
    status: "in progress",
  },
  {
    id: 3,
    title: "Mempelajari Dasar Zustand",
    description: "Pahami konsep store, action, dan selector pada Zustand.",
    priority: "low",
    deadline: "2026-11-25",
    status: "in progress",
  },
  {
    id: 4,
    title: "Belajar Tailwind CSS",
    description: "Latihan membuat layout responsif dengan utility class.",
    priority: "medium",
    deadline: "2026-11-30",
    status: "done",
  },
  {
    id: 5,
    title: "Mengerjakan Proyek Computer Vision",
    description:
      "Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm.",
    priority: "high",
    deadline: "2026-10-11",
    status: "in progress",
  },
];

export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];
