"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import { successStories } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const SuccessStories = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y, Keyboard]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      keyboard
    >
      {successStories.map((story) => (
        <SwiperSlide key={story.title}>
          <Card className="w-[90%] mx-auto">
            <CardHeader>
              <CardTitle className="">{story.name}</CardTitle>
              <CardDescription className="text-gray-600 md:text-lg font-Roboto text-md dark:text-gray-400">
                {story.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 md:text-lg font-Roboto text-md dark:text-gray-200">
                {story.description}
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SuccessStories;
