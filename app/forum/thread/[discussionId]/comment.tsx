"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { createComment } from "@/queries/discussions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewComment = ({ discussionId }: { discussionId: string }) => {
  const session = useSession();
  const router = useRouter();

  const formSchema = z.object({
    comment: z.string().nonempty("Comment cannot be empty"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function adjustTextareaHeight(event: any) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      createComment({
        content: values.comment,
        userId: session.data?.user?.id,
        discussionId: discussionId,
      });

      form.reset();

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  if (!session.data?.user) {
    return (
      <div className="flex flex-col gap-4">
        <Link
          className="font-Lato text-sm text-blue-500"
          href={"/api/auth/signin"}
        >
          Login to comment
        </Link>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Comment <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    placeholder="Your comment"
                    className="resize-none overflow-y-hidden"
                    onInput={adjustTextareaHeight}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                <a
                  href="https://www.markdownguide.org/cheat-sheet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Markdown
                </a>{" "}
                is supported
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewComment;
