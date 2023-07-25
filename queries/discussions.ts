"use server";

import { prisma } from "@/lib/prisma";

async function getDiscussions(page?: number, search?: string) {
  try {
    const discussions = await prisma.discussion.findMany({
      include: {
        author: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: page ? (page - 1) * 10 : undefined,
      take: page ? 10 : undefined,
      where: {
        title: {
          contains: search,
        },
      },
    });

    const discussionsCount = await prisma.discussion.count({
      where: {
        title: {
          contains: search,
        },
      },
    });

    return {
      discussions,
      count: discussionsCount,
    };
  } catch (error) {
    return null;
  }
}

interface CreateDiscussionInput {
  title: string;
  content: string;
  userId: string;
}

async function createDiscussion({
  title,
  content,
  userId,
}: CreateDiscussionInput) {
  try {
    const discussion = await prisma.discussion.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });

    return discussion.id;
  } catch (error) {
    return null;
  }
}

async function getDiscussionDetails(id: string) {
  try {
    const discussion = await prisma.discussion.findUnique({
      where: {
        id,
      },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        author: true,
      },
    });
    return discussion;
  } catch (error) {
    return null;
  }
}

async function getComments(id: string) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        discussionId: id,
      },
      include: {
        author: true,
      },
    });
    return comments;
  } catch (error) {
    return null;
  }
}

async function createComment({
  content,
  userId,
  discussionId,
}: {
  content: string;
  userId: string;
  discussionId: string;
}) {
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        authorId: userId,
        discussionId,
      },
    });
    return comment;
  } catch (error) {
    return null;
  }
}

export {
  getDiscussions,
  createDiscussion,
  getDiscussionDetails,
  getComments,
  createComment,
};
