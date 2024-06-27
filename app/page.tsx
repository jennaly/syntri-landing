import Image from "next/image";
import Values from "./components/Values";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <section id="hero" className="bg-primary-blue w-full">
        <div className="max-w-[1400px] mx-auto flex flex-col py-[50px] px-[24px] md:px-[40px] lg:px-[80px] xl:px-[100px] text-primary-white">
          <div className="flex flex-col md:flex-row md:gap-[32px] lg:gap-[44px] xl:justify-between">
            <div className="md:hidden mx-auto my-[24px]">
              <div className="relative">
                <Image
                  src="/assets/Hero.png"
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
              </div>
            </div>

            <div className="flex flex-col gap-[32px] xl:gap-[44px] pt-[44px] pb-[12px] lg:py-[50px] border-b xl:border-0 border-secondary-blue text-center md:w-[48%] md:text-left xl:justify-center xl:py-0 max-h-[550px]">
              <h1 className="uppercase mx-auto lg:mx-0 text-[32px] lg:text-[44px] xl:text-[50px] leading-[42px] lg:leading-[56px] xl:leading-[70px] font-bold tracking-wide md:text-[35px] max-w-[500px]">
                <span className="block">Seamless IT,</span>{" "}
                <span className="block"> Modern Solutions</span>
              </h1>
              <p className="text-lg lg:text-[22px] leading-[26px] lg:leading-[30px] xl:leading-[40px] tracking-wide text-primary-grey">
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
                  className="w-full h-full object-cover object-center rounded-b-[18px]"
                />

                <Image
                  src="/assets/Hero-Vector-Dots.png"
                  width={140}
                  height={92}
                  alt="Dots vector"
                  className="absolute -top-6 -left-7 xl:-left-20 xl:top-0 xl:w-1/3"
                />

                <Image
                  src="/assets/Hero-Vector-Rectangle.png"
                  width={356}
                  height={354}
                  alt="Rectangle vector"
                  className="pr-6 xl:pr-10 absolute top-7 left-6 xl:left-10 xl:top-9 w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="xl:flex xl:mt-[80px] xl:justify-between xl:items-center">
            <h2 className="text-[28px] font-bold py-[44px] tracking-wide text-center md:text-left">
              Our Values
            </h2>
            <Values />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="flex flex-col gap-[32px] max-w-xl text-center text-primary-black py-[48px] px-[24px]"
      >
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-[28px] font-bold tracking-wide">
            What We Deliver
          </h2>
          <p className="text-lg leading-[26px] tracking-wide">
            Enhance your business efficiency with our comprehensive suite of
            solutions, designed to streamline processes and drive productivity.
          </p>
        </div>
        <Services />
      </section>
    </main>
  );
}
