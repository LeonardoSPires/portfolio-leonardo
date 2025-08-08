import React from "react";

import { FooterLink, FooterContainer } from './styles';


export default function Footer() {
  return (
    <FooterContainer>
      <p>E-mail: 
         <a href="mailto:leopires1988@gmail.com"> leopires1988@gmail.com</a>
         </p>
      <p>
        <FooterLink href="https://github.com/leonardospires" target="_blank" rel="noreferrer">GitHub</FooterLink>|
        <FooterLink href="https://linkedin.com/in/leonardodasilvapires" target="_blank" rel="noreferrer">LinkedIn</FooterLink>
      </p>
    </FooterContainer>
  );
}
