import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { howItWorksList, faqList } from "@/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import Link from "next/link";
import SuccessStories from "@/components/custom/SuccessStories";

export default function Home() {
  return (
    <main className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-xl font-semibold md:text-3xl font-SpaceGrotesk">
          Unleash the Power of Collaboration in Development
        </h1>
        <p className="text-gray-600 md:text-lg text-md dark:text-gray-400 font-Roboto">
          Connect with developers worldwide. Collaborate, learn, and innovate
          together, whether you are a beginner or an experienced pro.
        </p>
        <div className="flex gap-4 font-SpaceGrotesk">
          <Button>Get Started</Button>
          <Button variant="outline">Explore Projects</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold md:text-3xl font-SpaceGrotesk">
          How it works
        </h2>
        <p className="text-gray-600 md:text-lg font-Roboto text-md dark:text-gray-400">
          Welcome to our Developer Collaboration Marketplace, where developers
          come together to collaborate, learn, and innovate.
          <br />
          Whether you&apos;re a beginner looking to gain experience, a seasoned
          professional seeking new challenges, or simply passionate about coding
          and creating, our platform provides the perfect environment for you to
          thrive. By joining our community, you&apos;ll have the opportunity to
          collaborate on exciting projects, expand your skills, and make
          valuable connections with like-minded developers from around the
          globe.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {howItWorksList.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="font-SpaceGrotesk">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {item.sublist.map((subitem) => (
                  <p
                    key={subitem}
                    className="text-gray-600 md:text-lg font-Roboto text-md dark:text-gray-400"
                  >
                    {subitem}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold md:text-3xl font-SpaceGrotesk">
          Success Stories
        </h2>
        <p className="text-gray-600 md:text-lg font-Roboto text-md dark:text-gray-400">
          Our community is full of talented developers who have collaborated on
          some amazing projects. Here are just a few of their success stories.
        </p>

        <SuccessStories />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold md:text-3xl font-SpaceGrotesk ">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 md:text-lg font-Roboto text-md dark:text-gray-400">
          Have a question? We&apos;ve got answers. If you can&apos;t find what
          you&apos;re looking for, feel free to{" "}
          <Link href="/forum" className="text-blue-500">
            ask in our forum
          </Link>
          .
        </p>

        <Accordion type="single" collapsible>
          {faqList.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-xl font-SpaceGrotesk">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 font-Roboto dark:text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
