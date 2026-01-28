// data/rooms.ts
export type Room = {
  id: string;
  name: string;
  price: number;
  rating: number;
  capacity: number;
  images: string[];
  description: string;
  amenities: string[];
  details: string[]; // New: extended features
  size: string;
  view: string;
};

export const ROOMS_DATA: Room[] = [
  {
    id: "1",
    name: "Emerald Garden Suite",
    price: 450,
    rating: 4.9,
    capacity: 2,
    size: "120 m²",
    view: "Private Tropical Garden",
    images: [
      "/images/rooms/emerald-garden/hero.jpg",
      "/images/rooms/emerald-garden/.jpg",
      "/images/rooms/emerald-garden/bathroom.jpg",
      "/images/rooms/emerald-garden/terrace.jpg",
    ],
    description:
      "A sanctuary of peace overlooking the private tropical gardens.",
    details: [
      "Private infinity pool with garden view",
      "Outdoor rain shower and bathtub",
      "King-size four-poster bed",
      "Dedicated outdoor lounge area",
      "Daily refreshed mini-bar with premium selections",
    ],
    amenities: [
      "Private Pool",
      "King Bed",
      "Mini Bar",
      "Outdoor Shower",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "2",
    name: "The Royal Penthouse",
    price: 1200,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "/images/rooms/royal-penthouse/main.jpg",
      "/images/rooms/royal-penthouse/living.jpg",
      "/images/rooms/royal-penthouse/bedroom.jpg",
      "/images/rooms/royal-penthouse/jacuzzi.jpg",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "Two King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "3",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661925259824-e106bca657ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "4",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "5",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661901997525-fdbfb88d8554?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "6",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://images.unsplash.com/photo-1592230228921-df3a88a2244e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "7",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "8",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1664299335717-71d868cd964e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "9",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661902026036-27a0ef055a68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "10",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://plus.unsplash.com/premium_photo-1661962493427-910e3333cf5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Main hero shot
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
  {
    id: "11",
    name: "The Royal Penthouse",
    price: 1050,
    rating: 5.0,
    capacity: 4,
    size: "350 m²",
    view: "360° Ocean & Jungle Panorama",
    images: [
      "https://images.unsplash.com/photo-1685592437742-3b56edb46b15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bedroom detail
      "https://images.unsplash.com/photo-1592229506151-845940174bb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Bathtub + nature
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    ],
    description: "Bespoke luxury with 360-degree views of the coastline.",
    details: [
      "Personal butler service 24/7",
      "Private elevator access",
      "Rooftop jacuzzi and sun deck",
      "Two master bedrooms with en-suite",
      "Full kitchen and dining for 8",
      "Panoramic floor-to-ceiling windows",
    ],
    amenities: [
      "Personal Butler",
      "Private Elevator",
      "Jacuzzi",
      "One King Beds",
      "Full Kitchen",
      "AC",
      "Wifi",
    ],
  },
] as const;
