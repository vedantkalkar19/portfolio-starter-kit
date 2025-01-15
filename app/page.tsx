import EXPERIENCE from "./components/experience";
import Projects from "./components/Projects";


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am a passionate Machine Learning enthusiast and Go developer, dedicated
         to designing workflows through the implementation of high-quality ML algorithms. I
          specialize in developing solutions using Kubernetes and CLI applications. This
           approach allows me to upskill, tackle real-world challenges, and
            gain hands-on experience that deepens my understanding of practical
             applications and their real-world use cases.`}
      </p>
      <div className="my-8">
      <EXPERIENCE/>
      <Projects />

      </div>
    </section>
  )
}
