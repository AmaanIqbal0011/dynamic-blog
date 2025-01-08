"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Showcase = () => {
  return (
    <>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center  dark:text-gray-200 mb-4 mx-auto pt-6">Our Top Blogs</h2>
      <Carousel plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <a href="https://www.https://www.balto.ai/blog/how-ai-already-impacts-our-lives-in-unforeseen-ways/?utm_term=&utm_campaign=(G)+Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=2743862643&hsa_cam=20003079310&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiA4fi7BhC5ARIsAEV1Yib1EDXpVWrbM7sL7deSXWHqifaUo1grAXx8T_1i5XM91ghiO9I0vD4aAvWXEALw_wcB.com/"  target="_blank" className="block">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/pexels-cottonbro-6153354.jpg")}
                  alt="blog"
                />
               
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                  Human and AI
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-200">
                    

                  "Human and AI" examines the collaboration between human creativity and artificial intelligence, focusing on innovation, ethics, and future possibilities.                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Button className="mx-1 transition-all duration-300" variant="outline">Read More</Button>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <a href="https://blog.seeburger.com/welcome-to-the-metaverse-an-introduction/"  target="_blank" className="block">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/pexels-tima-miroshnichenko-6499018.jpg")}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                    Future & Metaverse
                  </h1>
                  <p className="leading-relaxed mb-3 dark:tetx-gray-200">
                  The Metaverse is a digital universe combining AR, VR, and blockchain to provide immersive experiences. This blog explores its potential and the technologies driving it.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button className="mx-1 transition-all duration-300" variant="outline">Read More</Button>
                  </div>
                 
                </div>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <a href="https://blogs.oracle.com/blockchain/post/the-evolution-of-enterprise-blockchain-customer-panel-at-oracle-cloudworld"  target="_blank" className="block">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/pexels-karolina-grabowska-5980585.jpg")}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                    BlockChain
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-200">
                    
Blockchain is a secure, decentralized ledger transforming industries such as finance, supply chain, and healthcare. This overview explores its features, applications, and challenges in the digital era.p
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Button className="mx-1 transition-all duration-300" variant="outline">Read More</Button>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <a href="https://www2.deloitte.com/us/en/insights/focus/tech-trends.html?id=us:2ps:3gl:cctt25:awa:aud:121124:emerging%20technologies:b:c&gad_source=1&gclid=Cj0KCQiA4fi7BhC5ARIsAEV1Yia4YOgEiXrHAvxXSVFAfk14xBoId_1YGD66XJ66gmLPampR5ND6hwwaApvhEALw_wcB"  target="_blank" className="block">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={require("../../public/photos/pexels-alxs-919734.jpg")}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-extrabold text-gray-900 mb-3 dark:text-gray-200">
                    New Era Of Technology 
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-200">
                  The new era of technology is reshaping industries, redefining lifestyles, and reimagining possibilities. From AI and blocknological revolution is empowering humanity with infinite potential
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Button className="mx-1 transition-all duration-300" variant="outline">Read More</Button>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Showcase;
