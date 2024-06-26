import Image from "next/image";
import Values from "./components/Values";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="bg-primary-blue text-primary-white max-w-xl text-center flex flex-col py-[50px] px-[24px]"
      >
        <div>
          <div id="heroImage" className="flex justify-center">
            <Image
              src="/assets/Hero.png"
              width={300}
              height={293}
              alt="Illustration of an IT employee working"
            />
          </div>
          <div
            id="heroText"
            className="flex flex-col gap-[32px] py-[44px] border-b border-secondary-blue"
          >
            <h1 className="uppercase text-[32px] leading-[42px] font-bold tracking-wide">
              <span className="block">Seamless IT,</span>{" "}
              <span className="block"> Modern Solutions</span>
            </h1>
            <p className="text-lg leading-[26px] tracking-wide text-primary-grey">
              We unlock your business potential by streamlining IT, letting you
              focus on what you do best. Our expert services amplify
              productivity and drive growth with innovative, reliable solutions.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[28px] font-bold py-[44px] tracking-wide">
            Our Values
          </h2>
          <Values />
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
