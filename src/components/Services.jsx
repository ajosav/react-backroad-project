import SectionTitle from "./SectionTitle";
import Article from "./Article";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <Article {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
