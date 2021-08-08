import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        Mi Portafolio Personal
      </SectionTitle>
      <SectionText>
        Soy un Desarrollador Web especializado en el Front End, apasionado por
        el mundo de la tecnología y siempre con ganas de aprender.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
