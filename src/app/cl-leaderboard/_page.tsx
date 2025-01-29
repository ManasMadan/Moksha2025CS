"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  ChevronsRight,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import { clsx } from "clsx";

const cinzel = Cinzel({
  subsets:["latin"],
});

const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setItemsPerPage(8);
        } else {
          setItemsPerPage(4);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};

const sampleData = [
  { id: 1, name: "John", points: 4534, rank: 1 },
  { id: 2, name: "Pranjul", points: 4432, rank: 2 },
  { id: 3, name: "Sanvi", points: 4398, rank: 3 },
  { id: 4, name: "Sarah", points: 4345, rank: 4 },
  { id: 5, name: "Michael", points: 4289, rank: 5 },
  { id: 6, name: "Emily", points: 4267, rank: 6 },
  { id: 7, name: "David", points: 4234, rank: 7 },
  { id: 8, name: "Lisa", points: 4198, rank: 8 },
  { id: 9, name: "James", points: 4167, rank: 9 },
  { id: 10, name: "Anna", points: 4132, rank: 10 },
];

const LeaderBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterRank, setFilterRank] = useState("all");
  const ITEMS_PER_PAGE = useResponsiveItemsPerPage();

  const filteredAndSortedData = useMemo(() => {
    return sampleData
      .filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesRank =
          filterRank === "all" ||
          (filterRank === "top5" && item.rank <= 5) ||
          (filterRank === "others" && item.rank > 5);
        return matchesSearch && matchesRank;
      })
      .sort((a, b) => {
        const sortVal = sortOrder === "desc" ? -1 : 1;
        return (a.points - b.points) * sortVal;
      });
  }, [searchQuery, sortOrder, filterRank]);

  const topPlayers = sampleData.slice(0, 5);
  const pageCount = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE);
  const currentData = filteredAndSortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getBarHeight = (rank: number) => {
    switch (rank) {
      case 1:
        return "h-[408px] md:h-[408px] sm:h-[300px]";
      case 2:
        return "h-[344px] md:h-[344px] sm:h-[250px]";
      case 3:
        return "h-[232px] md:h-[232px] sm:h-[200px]";
      case 4:
        return "h-[136px] md:h-[136px] sm:h-[150px]";
      case 5:
        return "h-[72px] md:h-[72px] sm:h-[100px]";
      default:
        return "h-40";
    }
  };

  const podiumOrder = [4, 3, 1, 2, 5];

  const getRankIcon = (rank: number) => {
    const iconClasses = "w-14 h-14 md:w-14 md:h-14 sm:w-10 sm:h-10 mx-auto";

    if (rank === 1)
      return (
        <div className="pt-12 sm:pt-8">
          <Image
            alt="crown"
            src="/crown.png"
            className={iconClasses}
            width={100}
            height={100}
          />
        </div>
      );
    if (rank === 2)
      return (
        <div className="pt-12 sm:pt-8">
          <Image
            alt="laurelwreath"
            src="/laurelwreath.png"
            className={iconClasses}
            width={100}
            height={100}
          />
        </div>
      );
    if (rank === 3)
      return (
        <div className="pt-12 sm:pt-8">
          <Image
            alt="trophy"
            src="/trophy.png"
            className={iconClasses}
            width={100}
            height={100}
          />
        </div>
      );

    return null;
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="fixed inset-0 bg-[url('/cl_bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3BAA] to-transparent opacity-60 mix-blend-overlay" />
      <div className="relative z-10 w-full py-8 px-4">
        <div className={`${cinzel.className} max-w-7xl mx-auto`}>
          <h1 className="text-white text-center mb-8 md:mb-24 tracking-wide font-[549] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-nowrap">
            CL LEADERBOARD
          </h1>

          {/* Top Players Podium */}
          <div className="relative mb-16 md:mb-24 hidden md:block">
            {/* Podium Grid */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-8 h-full relative px-2 sm:px-4">
              {podiumOrder.map((position) => {
                const player = topPlayers.find((p) => p.rank === position);
                if (!player) return null;

                return (
                  <div
                    key={player.id}
                    className="relative flex flex-col items-center justify-end h-full"
                  >
                    {/* Bar */}
                    <div className="w-full relative">
                      <div
                        className={clsx(
                          "w-full rounded-t-3xl transition-all duration-300",
                          getBarHeight(player.rank),
                          position === 1 || position === 4 || position === 5
                            ? "bg-gradient-to-b from-[#000545] via-[#000545f4] to-transparent"
                            : "bg-gradient-to-b from-[#002173] via-[#002173f4] to-transparent"
                        )}
                      >
                        {getRankIcon(player.rank)}
                      </div>

                      {/* Profile Box */}
                      <div className="absolute -top-24 sm:-top-28 md:-top-36 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black rounded-3xl flex items-center justify-center mb-2 mx-auto" />
                        <p className="text-white font-bold text-base sm:text-xl md:text-2xl text-center whitespace-nowrap">
                          {player.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-3 mb-8 items-center justify-center">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
              <Input
                type="text"
                placeholder="Search players..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white text-white pl-10 w-full md:w-[50ch] rounded-full"
              />
            </div>

            <Select value={filterRank} onValueChange={setFilterRank}>
              <SelectTrigger className="w-full md:w-fit bg-white text-black rounded-full">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Players</SelectItem>
                <SelectItem value="top5">Top 5</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full md:w-auto bg-white text-black rounded-full"
                >
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortOrder("desc")}>
                  Highest Points
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOrder("asc")}>
                  Lowest Points
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Leaderboard List */}
          <div className="space-y-2 mb-8 font-[510]">
            <div className="flex justify-between text-white bg-[#070707B2] py-2 rounded-full text-sm px-4 sm:px-8 mb-2">
              <span>NAME</span>
              <span>POINTS</span>
            </div>
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-between items-center px-4 sm:px-8 py-4 rounded-2xl transition-colors 
                  ${index % 2 === 0 ? "bg-[#010E2BB2]" : "bg-[#4FB8D1CC]"}
              `}
              >
                <span className="text-white text-sm sm:text-base">
                  {item.name}
                </span>
                <span className="text-white text-sm sm:text-base">
                  {item.points}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              className="text-white text-xl disabled:opacity-50 rounded-full h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>

            <Button
              variant="ghost"
              className="text-white text-xl disabled:opacity-50 rounded-full h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>

            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                className={`w-8 h-8 sm:w-12 sm:h-12 p-0 rounded-full text-base sm:text-xl ${
                  currentPage === page ? "bg-[#0C1A42]" : "text-white"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="ghost"
              className="text-white text-xl disabled:opacity-50 rounded-full h-8 w-8 sm:h-10 sm:w-10"
              onClick={() =>
                setCurrentPage((prev) => Math.min(pageCount, prev + 1))
              }
              disabled={currentPage === pageCount}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>

            <Button
              variant="ghost"
              className="text-white text-xl disabled:opacity-50 rounded-full h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setCurrentPage(pageCount)}
              disabled={currentPage === pageCount}
            >
              <ChevronsRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
