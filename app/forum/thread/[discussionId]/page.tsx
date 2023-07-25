import { getDiscussionDetails } from "@/queries/discussions";
import BackButton from "@/components/custom/BackButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RenderMarkdown } from "@/components/custom/RenderMarkdown";
import NewComment from "./comment";

const DiscussionDetails = async ({
  params,
}: {
  params: { discussionId: string };
}) => {
  const discussion = await getDiscussionDetails(params.discussionId);

  if (!discussion) {
    return (
      <div className="flex flex-col">
        <BackButton />
        <p className="text-2xl font-bold font-SpaceGrotesk">
          Discussion not found
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center gap-4">
        <BackButton />
        Go back
      </div>

      <Card key={discussion.id}>
        <CardHeader className="gap-1">
          <p className="text-gray-600 font-Roboto dark:text-gray-400">
            {discussion.createdAt.toDateString()}
          </p>
          <CardTitle className="text-2xl font-SpaceGrotesk ">
            {discussion.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <RenderMarkdown content={discussion.content} />
        </CardContent>
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

      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <p className="text-2xl font-bold font-SpaceGrotesk">Comments</p>
          <NewComment discussionId={discussion.id} />
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-700 mb-6" />

      <div className="flex flex-col gap-4">
        {discussion.comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader className="gap-1">
              <p className="text-gray-600 font-Roboto dark:text-gray-400">
                {comment.createdAt.toDateString()}
              </p>
            </CardHeader>
            <CardContent className="">
              <RenderMarkdown content={comment.content} />
            </CardContent>
            <hr className="border-gray-200 dark:border-gray-700 mb-6" />
            <CardFooter className="gap-2">
              <Image
                src={comment.author.image ?? "/default-profile.png"}
                width={24}
                height={24}
                alt={`${comment.author.name}'s profile picture`}
                className="rounded-full"
              />
              <p className="text-gray-600 font-Roboto dark:text-gray-400">
                {comment.author.name}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiscussionDetails;
