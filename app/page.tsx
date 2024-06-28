import Image from "next/image";
import Values from "./components/Values";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <section id="hero" className="bg-primary-blue w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col py-[80px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] text-primary-white">
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
                <span className="block">Seamless IT,</span>{" "}
                <span className="block"> Modern Solutions</span>
              </h1>
              <p className="text-md lg:text-lg xl:leading-[40px] tracking-wide text-primary-grey">
                We unlock your business potential by streamlining IT, letting
                you focus on what you do best. Our expert services amplify
                productivity and drive growth with innovative, reliable
                solutions.
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
              Our Values
            </h2>
            <Values />
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-clip">
        <div className="flex absolute top-2 -right-32 md:-right-20 lg:-right-12 xl:-right-44 md:top-4">
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="w-[200px] xl:w-[230px] object-contain"
          />
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="ml-[10px] w-[200px] xl:w-[230px] object-contain hidden xl:inline"
          />
        </div>

        <div className="flex flex-col gap-[32px] lg:gap-[44px] max-w-[1440px] mx-auto text-center text-primary-black py-[48px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-wide">
              What We Deliver
            </h2>
            <p className="md:w-[550px] lg:w-[700px] md:mx-auto text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide">
              Enhance your business efficiency with our comprehensive suite of
              solutions, designed to streamline processes and drive
              productivity.
            </p>
          </div>
          <Services />
        </div>
      </section>

      <section id="our-story" className="bg-primary-blue w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col py-[48px] xl:pt-[100px] xl:pb-[136px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] text-primary-white">
          <div className="flex flex-col md:flex-row md:gap-[32px] lg:gap-[44px] xl:justify-between">
            <div className="md:hidden mx-auto my-[24px]">
              <div className="relative">
                <Image
                  src="/assets/Our-Story.png"
                  width={300}
                  height={293}
                  alt="Illustration of an IT employee working"
                  className="rounded-b-[18px]"
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

                <Image
                  src="/assets/Our-Story-Vector-Stripes.png"
                  width={280}
                  height={58}
                  alt="Rectangle vector"
                  className="absolute -right-5 bottom-0 z-10 w-[30px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[32px] pt-[44px] pb-[12px] lg:py-[50px] text-center md:w-[48%] md:text-left xl:justify-end xl:py-0 max-h-[550px]">
              <h2 className="mx-auto lg:mx-0 text-3xl xl:text-4xl font-bold tracking-wide max-w-[500px]">
                Know Our Story
              </h2>
              <p className="text-md lg:text-lg tracking-wide text-primary-grey">
                At Syntri, we pride ourselves on over a decade of extensive
                experience in the IT industry, serving businesses across the
                spectrum from small startups to large enterprises. With a deep
                understanding of the evolving technological landscape, we
                deliver tailored solutions that meet the unique needs of each
                client.
              </p>
              <p className="text-md lg:text-lg tracking-wide text-primary-grey">
                Our journey through diverse sectors has equipped us with
                invaluable insights and expertise, enabling us to navigate
                challenges and maximize opportunities for our clients. As
                trusted advisors, we are committed to leveraging our wealth of
                experience to drive innovation, efficiency, and growth for
                businesses in today's dynamic digital era.
              </p>
            </div>

            <div className="hidden md:inline md:w-[52%] xl:w-[46%]">
              <div className="pr-6 xl:pr-8 relative w-full h-full">
                <Image
                  src="/assets/Our-Story.png"
                  width={300}
                  height={293}
                  alt="Illustration of an IT employee working"
                  className="w-full h-full object-cover object-center rounded-b-[18px]"
                />

                <Image
                  src="/assets/Our-Story-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute top-10 -left-7 xl:-left-10 xl:top-10 xl:w-[10%]"
                />

                <Image
                  src="/assets/Hero-Vector-Rectangle.png"
                  width={356}
                  height={354}
                  alt="Rectangle vector"
                  className="pr-6 xl:pr-8 absolute top-7 left-6 xl:left-10 xl:top-9 w-full h-full"
                />

                <Image
                  src="/assets/Our-Story-Vector-Stripes.png"
                  width={280}
                  height={58}
                  alt="Rectangle vector"
                  className="absolute -right-0 bottom-0 z-10 w-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-clip">
        <div className="flex absolute top-2 -right-32 md:-right-20 lg:-right-12 xl:-right-44 md:top-4">
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="w-[200px] xl:w-[230px] object-contain"
          />
          <Image
            src="/assets/Services-Vector-Dots.png"
            width={722}
            height={168}
            alt="Illustration of dots"
            className="ml-[10px] w-[200px] xl:w-[230px] object-contain hidden xl:inline"
          />
        </div>

        <div className="flex flex-col gap-[32px] lg:gap-[44px] max-w-[1440px] mx-auto text-center text-primary-black py-[48px] xl:py-[120px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-wide">
              What We Deliver
            </h2>
            <p className="md:w-[550px] lg:w-[700px] md:mx-auto text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide">
              Enhance your business efficiency with our comprehensive suite of
              solutions, designed to streamline processes and drive
              productivity.
            </p>
          </div>
          <Services />
        </div>
      </section>
    </main>
  );
}
