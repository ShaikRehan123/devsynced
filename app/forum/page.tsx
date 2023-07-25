import { getDiscussions } from "../../queries/discussions";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Pagination from "./pagination";

const ForumPage = async ({
  searchParams,
}: {
  searchParams: { search: string; page: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const discussions = await getDiscussions(page);
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold font-SpaceGrotesk">Community Forum</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <Input placeholder="Search" className="flex-1" type="search" />
        {session !== null && (
          <Button className="font-SpaceGrotesk" asChild>
            <Link href="/forum/new">
              <Plus className="mr-2" size={24} />
              New Discussion
            </Link>
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-8">
        {discussions?.discussions?.map((discussion) => (
          <Card key={discussion.id}>
            <CardHeader className="gap-1 relative">
              <p className="text-gray-600 font-Roboto dark:text-gray-400">
                {discussion.createdAt.toDateString()}
              </p>
              <CardTitle className="text-2xl font-SpaceGrotesk">
                {discussion.title}
              </CardTitle>
              <Button
                size={"icon"}
                className="absolute -right-4 -top-6 rounded-full p-2"
                variant={"outline"}
                asChild
              >
                <Link href={`/forum/thread/${discussion.id}`}>
                  <ArrowUpRight size={24} />
                </Link>
              </Button>
            </CardHeader>

            <hr className="border-gray-200 dark:border-gray-700 mb-6" />
            <CardFooter className="gap-2">
              <Image
                src={discussion.author.image ?? "/default-profile.png"}
                width={24}
                height={24}
                alt={`${discussion.author.name}'s profile picture`}
                className="rounded-full"
              />
              <p className="text-gray-600 font-Roboto dark:text-gray-400">
                {discussion.author.name}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-gray-600 font-Roboto dark:text-gray-400">
          Showing {discussions?.discussions?.length} of {discussions?.count}{" "}
          discussions
        </p>

        <Pagination total={discussions?.count || 10} />
      </div>
    </div>
  );
};

export default ForumPage;
