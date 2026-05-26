import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const search =
      searchParams.get("search") || "";

    const location =
      searchParams.get("location") || "";

    const rating =
      Number(searchParams.get("rating")) || 0;

    const colleges =
      await prisma.college.findMany({
        where: {
          name: {
            contains: search,
            mode: "insensitive",
          },

          location: {
            contains: location,
            mode: "insensitive",
          },

          rating: {
            gte: rating,
          },
        },
      });

    return NextResponse.json(colleges);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch colleges" },
      { status: 500 }
    );
  }
}