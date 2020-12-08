import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Nav />
      <HeroSection />
    </Container>
  );
}

export default App;
