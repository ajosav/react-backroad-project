import SectionTitle from "./SectionTitle";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tourData) => (
          <Tour {...tourData} key={tourData.id} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
