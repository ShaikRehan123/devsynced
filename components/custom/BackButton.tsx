"use client";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => router.back()}>
      <MoveLeftIcon className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;
