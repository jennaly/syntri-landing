import Image from "next/image";
import HeroValues from "./components/HeroValues";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="bg-primary-blue text-primary-white max-w-xl text-center flex flex-col py-[32px] px-[24px]"
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
            <h1 className="uppercase text-3xl leading-[42px] font-bold tracking-wide">
              <span className="block">Seamless IT,</span>{" "}
              <span className="block"> Modern Solutions</span>
            </h1>
            <p className="text-lg leading-[26px] tracking-wide">
              We unlock your business potential by streamlining IT, letting you
              focus on what you do best. Our expert services amplify
              productivity and drive growth with innovative, reliable solutions.
            </p>
          </div>
        </div>

        <HeroValues />
      </section>
    </main>
  );
}
