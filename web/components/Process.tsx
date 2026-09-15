import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="section section--steel-deep">
      <div className="wrap">
        <div className="process__head">
          <h2>From First Call to Final Walkthrough</h2>
          <p>A straightforward process, the same way every time — no surprises between the quote and the finished job.</p>
        </div>
        <div className="process__track">
          {processSteps.map((step) => (
            <div className="process__step" key={step.step}>
              <div className="process__num">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
