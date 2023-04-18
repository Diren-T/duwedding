import styled from "styled-components";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import BookingModal from "../components/BookingModal";
import { useState } from "react";

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

const LandingPage = styled(PageContainer)`
  background-image: url("/IMG_2468.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6%; // Passen Sie die Höhe des weißen Balkens an
  background-color: white;
`;

const SecondPage = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Wrapper = styled.div`
  max-width: 93%; // Passen Sie diesen Wert an, um den gewünschten Platz links und rechts zum Bildschirmrand zu erhalten
  margin: 0 auto; // Zentriert den Inhalt horizontal
`;

const PlanList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const PlanListItem = styled.li`
  margin-bottom: 0.5rem;
`;
const SelectPlanButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
`;
const PricingPlan = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem;
  width: 30%;
  min-width: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PlanTitle = styled.h3`
  margin: 0;
`;

const PlanPrice = styled.p`
  font-size: 2rem;
  margin: 0.5rem 0;
`;
const PricingPlansContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;
const ThirdPage = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const Image = styled.img`
  margin: 0.5rem;
  max-width: ${(props) => (props.small ? "200px" : "400px")};
  max-height: ${(props) => (props.small ? "200px" : "400px")};
`;

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Du Wedding</title>
        <meta name="description" content="My awesome Next.js app!" />
        <link rel="icon" href="/LOGO_2020_s.png" />
      </Head>
      <Wrapper>
        <LandingPage id="landingPage" className="main-container">
          <main>
            <h1>Welcome to my Next.js App!</h1>
            <p>This is the homepage.</p>
          </main>
          <WhiteBar />
        </LandingPage>

        <SecondPage id="secondPage" className="main-container">
          <PricingPlansContainer>
            <PricingPlan>
              <PlanTitle>Basis</PlanTitle>
              <PlanList>
                <PlanListItem>90 min shooting</PlanListItem>
                <PlanListItem>60 Sekunden shooting clip</PlanListItem>
                <PlanListItem>30 bearbeitete Bilder</PlanListItem>
                <PlanListItem>Unterstützung bei Location suche</PlanListItem>
                <PlanListItem>
                  Shooting Story und alle Bilder auf einem USB-Datenträger
                </PlanListItem>
              </PlanList>

              <SelectPlanButton>Angebot auswählen</SelectPlanButton>
            </PricingPlan>
            <PricingPlan>
              <PlanTitle>Fotografie & Film Pro</PlanTitle>
              <PlanList>
                <PlanListItem>10 Stunden Fotografie & Film</PlanListItem>
                <PlanListItem>500 bearbeitete Bilder</PlanListItem>
                <PlanListItem>Online-Galerie & Video</PlanListItem>
                <PlanListItem>1-minütiger Trailer</PlanListItem>
              </PlanList>
              <SelectPlanButton>Angebot auswählen</SelectPlanButton>
            </PricingPlan>
            <PricingPlan>
              <PlanTitle>All-Inclusive</PlanTitle>
              <PlanList>
                <PlanListItem>Ganztägige Fotografie & Film</PlanListItem>
                <PlanListItem>700 bearbeitete Bilder</PlanListItem>
                <PlanListItem>Online-Galerie & Video</PlanListItem>
                <PlanListItem>3-minütiger Trailer</PlanListItem>
                <PlanListItem>Fotobuch & USB-Stick</PlanListItem>
              </PlanList>
              <SelectPlanButton>Angebot auswählen</SelectPlanButton>
            </PricingPlan>
          </PricingPlansContainer>
        </SecondPage>
        <ThirdPage id="thirdPage" className="main-container">
          <h2>Dritte Seite</h2>
          <ImageGallery>
            <Image src="/IMG_2465.jpg" />
            <Image src="/IMG_2466.jpg" />
            <Image src="/IMG_2468.jpg" />
            <Image src="/IMG_2469.jpg" />
            <Image src="/IMG_2470.jpg" />
            <Image src="/IMG_2473.jpg" />
          </ImageGallery>
          {modalOpen && (
            <BookingModal
              onClose={() => setModalOpen(false)}
              caption="Standort: Berlin, Jahreszeit: Sommer"
            />
          )}
        </ThirdPage>
      </Wrapper>

      <ScrollLink
        activeClass="active"
        to="thirdPage"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
      >
        <ScrollButton>↓</ScrollButton>
      </ScrollLink>
    </>
  );
}
