import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Teconologías</SectionTitle>
    <SectionText>
      He trabajado con distintas tecnologías en el mundo del desarrollo web,
      desde el Front End, Back End y el Diseño de la Interfaz.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Node.js y Bases de Datos
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Bootstrap y Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider></SectionDivider>
  </Section>
);

export default Technologies;
