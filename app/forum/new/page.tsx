"use client";

import BackButton from "@/components/custom/BackButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { createDiscussion } from "@/queries/discussions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { RenderMarkdown } from "@/components/custom/RenderMarkdown";

const NewForumPage = () => {
  const session = useSession();

  const formSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().min(10, "Content must be at least 10 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const [showPreview, setShowPreview] = useState(false);

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const id = await createDiscussion({
      ...values,
      userId: session.data?.user?.id,
    });
    form.reset();
    router.push(`/forum/thread/${id}`);
  }

  function adjustTextareaHeight(event: any) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <BackButton />
        Go back
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Title <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Content <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      placeholder="Content"
                      className="resize-none overflow-y-hidden"
                      onInput={adjustTextareaHeight}
                      {...field}
                    />
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="absolute bottom-2 translate-y-full right-2 rounded-full p-2  cursor-pointer"
                      asChild
                      onClick={() => setShowPreview(!showPreview)}
                    >
                      {showPreview ? (
                        <ArrowUpIcon size={24} />
                      ) : (
                        <ArrowDownIcon size={24} />
                      )}
                    </Button>
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

          {showPreview && <RenderMarkdown content={form.watch("content")} />}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewForumPage;
