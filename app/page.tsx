import Image from "next/image";
import Values from "./components/Values";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import { CountUpStats } from "./components/Stats";
import Copy from "./copy";

export default function Home() {
  const {
    Hero,
    ServicesSection,
    OurStorySection,
    TestimonialsSection,
    CTABanner,
  } = Copy;

  return (
    <main>
      <section id="hero" className="bg-primary-blue w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col pt-[20px] py-[40px] md:py-[80px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] text-primary-white">
          <div className="flex flex-col md:flex-row md:gap-[32px] lg:gap-[44px] xl:justify-between">
            <div className="md:hidden mx-auto my-[24px]">
              <div className="relative">
                <Image
                  src="/assets/Hero.png"
                  width={300}
                  height={293}
                  alt="Illustration of an IT employee working"
                  className="rounded-b-[18px] opacity-80"
                />

                <Image
                  src="/assets/Hero-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute -top-6 -left-7"
                />
                <Image
                  src="/assets/Hero-Vector-Rectangle.png"
                  width={356}
                  height={354}
                  alt="Rectangle vector"
                  className="absolute top-7 left-6 w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[32px] xl:gap-[44px] pt-[44px] pb-[12px] lg:py-[50px] border-b xl:border-0 border-secondary-blue text-center md:w-[48%] md:text-left xl:justify-center xl:py-0 max-h-[550px]">
              <h1 className="uppercase font-bold text-3xl xl:text-[64px] xl:leading-[82px]">
                <span className="block">{Hero.titleLine1}</span>{" "}
                <span className="block">{Hero.titleLine2}</span>
              </h1>
              <p className="text-md lg:text-lg xl:leading-[40px] tracking-wide text-primary-grey">
                {Hero.description}
              </p>
              <div className="xl:block xl:w-[70%] xl:bg-secondary-blue h-[1px]"></div>
            </div>

            <div className="hidden md:inline md:w-[52%] xl:w-[48%]">
              <div className="pr-6 xl:pr-8 relative w-full h-full">
                <Image
                  src="/assets/Hero.png"
                  width={300}
                  height={293}
                  alt="Illustration of an IT employee working"
                  className="w-full h-full object-cover object-center rounded-b-[18px] opacity-80 brightness-105"
                />

                <Image
                  src="/assets/Hero-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute -top-6 -left-7 xl:-left-24 xl:top-0 xl:w-1/3"
                />

                <Image
                  src="/assets/Hero-Vector-Rectangle.png"
                  width={356}
                  height={354}
                  alt="Rectangle vector"
                  className="pr-6 xl:pr-10 absolute top-7 left-6 xl:left-12 xl:top-9 w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="xl:flex xl:mt-[80px] xl:justify-between xl:items-center">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-wide text-center md:text-left py-[44px]">
              {Hero.OurValuesSection.heading}
            </h2>
            <Values values={Hero.OurValuesSection.values} />
          </div>
        </div>
      </section>

      <section id="Services" className="relative overflow-clip">
        <div className="flex absolute top-2 -right-32 md:-right-20 lg:-right-12 xl:-right-44 md:top-4">
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="w-[180px] xl:w-[230px] object-contain"
          />
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="ml-[10px] xl:w-[230px] object-contain hidden xl:inline"
          />
        </div>

        <div className="flex flex-col gap-[32px] lg:gap-[44px] max-w-[1440px] mx-auto text-center text-primary-black py-[48px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-wide">
              {ServicesSection.heading}
            </h2>
            <p className="md:w-[550px] lg:w-[700px] md:mx-auto text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide">
              {ServicesSection.description}
            </p>
          </div>
          <Services services={ServicesSection.services} />
        </div>
      </section>

      <section id="stats">
        <div className="bg-[#C3DCFF]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
            <CountUpStats />
          </div>
        </div>
      </section>

      <section
        id="About"
        className="bg-primary-blue w-full lg:scroll-my-10 2xl:scroll-my-20"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col py-[48px] xl:pt-[100px] xl:pb-[136px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] text-primary-white">
          <div className="flex flex-col md:flex-row-reverse md:gap-[32px] lg:gap-[44px] xl:justify-between">
            <div className="md:w-[52%] xl:w-[46%] my-auto">
              <div className="px-8 md:pr-8 md:pl-0 relative w-full h-full">
                <Image
                  src="/assets/Our-Story.png"
                  width={300}
                  height={293}
                  alt="Illustration of an IT employee working"
                  className="w-full"
                />

                <Image
                  src="/assets/Hero-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute -top-6 left-2 w-[135px] md:-top-10 md:-left-8 md:w-[140px] lg:hidden "
                />

                <Image
                  src="/assets/Our-Story-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute -left-7 top-10 xl:-left-10 xl:top-10 lg:w-[10%] hidden lg:inline-block"
                />

                <Image
                  src="/assets/Hero-Vector-Rectangle.png"
                  width={300}
                  height={293}
                  alt="Rectangle vector"
                  className="absolute w-full h-full top-7 left-8 px-8 md:pr-8 md:pl-0"
                />

                <Image
                  src="/assets/Our-Story-Vector-Stripes.png"
                  width={280}
                  height={58}
                  alt="Rectangle vector"
                  className="absolute right-2 bottom-0 z-10 w-[32px] md:right-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[32px] pb-[12px] mt-[10px] py-[50px] md:mt-[0] md:py-[0] text-center md:w-[48%] md:text-left xl:justify-end max-h-[550px]">
              <h2 className="mx-auto md:mx-0 text-3xl xl:text-4xl font-bold tracking-wide max-w-[500px]">
                {OurStorySection.heading}
              </h2>
              <p className="text-md lg:text-lg tracking-wide text-primary-grey">
                {OurStorySection.description.paragraph1}
              </p>
              <p className="text-md lg:text-lg tracking-wide text-primary-grey">
                {OurStorySection.description.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] pt-[48px] xl:pt-[100px]">
          <div className="max-w-[570px]  text-center md:text-left flex flex-col gap-[24px]">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-wide">
              {TestimonialsSection.heading}
            </h2>
            <p className="text-md lg:text-lg tracking-wide">
              {TestimonialsSection.description}
            </p>
          </div>
        </div>
        <Testimonials testimonials={TestimonialsSection.testimonials} />
        <Image
          src="/assets/Services-Vector-Dots.png"
          width={722}
          height={168}
          alt="Illustration of dots"
          className="absolute bottom-2 -left-4 w-[180px] md:w-[200px] xl:w-[230px] object-contain"
        />

        <Image
          src="/assets/Testimonials-Vector-Rectangle.png"
          width={856}
          height={232}
          alt="Illustration of stripes"
          className="absolute top-0 md:top-0 lg:top-10 xl:top-20 right-0 w-[150px] xl:w-[200px] object-contain"
        />
      </section>

      <section
        id="CTA-Banner"
        className="max-w-[1440px] mx-auto  px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] py-[48px] xl:py-[100px]"
      >
        <div className="bg-[#C3DCFF] rounded-2xl p-10 md:px-20 lg:px-32 lg:py-16 xl:py-20 text-center flex flex-col gap-5">
          <h2 className="text-3xl xl:text-4xl font-bold tracking-wide max-w-[700px] mx-auto text-primary-blue">
            {CTABanner.heading}
          </h2>
          <p className="mx-auto md:w-[600px]">{CTABanner.description}</p>
          <Link href={CTABanner.buttonLink}>
            <button className="bg-primary-blue text-white rounded-full px-6 py-2 font-medium tracking-wide">
              {CTABanner.buttonLabel}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
