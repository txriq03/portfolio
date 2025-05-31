import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-semibold mt-5 lg:mt-30">
        <h1 className="leading-12 sm:leading-15">
          <span className="text-white/75">Hey, I'm </span>Tariq.
        </h1>
        <h2 className="leading-12 sm:leading-15">
          {" "}
          <span className="text-white/75">A Software </span>Engineer.
        </h2>
      </div>
      <p className="text-white/50 my-2">
        With experience across frontend, backend, and mobile development, I
        enjoy turning complex problems into simple, scalable solutions - driven
        by clean code, thoughtful design, and real-world impact.
      </p>
    </Container>
  );
}
