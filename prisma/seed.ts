import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.8,
        overview: "Premier engineering institute in India.",
        placements: "Average package 25 LPA",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 260000,
        rating: 4.9,
        overview: "Top-ranked IIT with excellent research opportunities.",
        placements: "Average package 28 LPA",
      },
      {
        name: "IIT Kanpur",
        location: "Kanpur",
        fees: 240000,
        rating: 4.7,
        overview: "Known for innovation and technical excellence.",
        placements: "Average package 22 LPA",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        overview: "Top National Institute of Technology.",
        placements: "Average package 15 LPA",
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 450000,
        rating: 4.9,
        overview: "Top private engineering institute.",
        placements: "Average package 30 LPA",
      },
      {
        name: "DTU",
        location: "Delhi",
        fees: 190000,
        rating: 4.5,
        overview: "Leading engineering college in Delhi.",
        placements: "Average package 14 LPA",
      },
      {
        name: "NSUT",
        location: "Delhi",
        fees: 200000,
        rating: 4.4,
        overview: "Highly reputed technical university.",
        placements: "Average package 16 LPA",
      },
      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 350000,
        rating: 4.3,
        overview: "Popular private engineering university.",
        placements: "Average package 9 LPA",
      },
      {
        name: "SRM University",
        location: "Chennai",
        fees: 320000,
        rating: 4.1,
        overview: "Private university with strong industry exposure.",
        placements: "Average package 8 LPA",
      },
      {
        name: "Manipal University",
        location: "Karnataka",
        fees: 400000,
        rating: 4.4,
        overview: "Well-known private university with global exposure.",
        placements: "Average package 10 LPA",
      },
      {
        name: "KIET Group of Institutions",
        location: "Ghaziabad",
        fees: 140000,
        rating: 4.2,
        overview: "Private engineering college with strong placements.",
        placements: "Average package 6 LPA",
      },
      {
        name: "AKGEC",
        location: "Ghaziabad",
        fees: 150000,
        rating: 4.1,
        overview: "Well-known engineering college in UP.",
        placements: "Average package 5 LPA",
      },
      {
        name: "JIIT Noida",
        location: "Noida",
        fees: 280000,
        rating: 4.3,
        overview: "Private institute with strong coding culture.",
        placements: "Average package 11 LPA",
      },
      {
        name: "Thapar University",
        location: "Punjab",
        fees: 380000,
        rating: 4.5,
        overview: "Top private engineering college in Punjab.",
        placements: "Average package 12 LPA",
      },
      {
        name: "Amity University",
        location: "Noida",
        fees: 300000,
        rating: 4.0,
        overview: "Large private university with diverse programs.",
        placements: "Average package 7 LPA",
      }
    ],
  });

  console.log("College data added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });