import MainSection from "../components/MainSection/MainSection";
import Map from "../components/Map/Map";
import FormSection from "..//components/FormSection/FormSection"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
<>
<section>
    <MainSection></MainSection>
  </section>
  <section>
    <Map></Map>
  </section>
  <section>
    <FormSection></FormSection>
  </section>
</>
  );
}
