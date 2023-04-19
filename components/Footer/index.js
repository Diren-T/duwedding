import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: #000;
  margin-right: 1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 1rem;
  height: 1.5rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </FooterLinks>
      <SocialMediaIcons>
        <Icon src="/instagram.svg" alt="Instagram" />
        <Icon src="/facebook.svg" alt="Facebook" />
        <Icon src="/youtube.svg" alt="YouTube" />
      </SocialMediaIcons>
    </FooterContainer>
  );
}
