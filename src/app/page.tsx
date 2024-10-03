"use client";

import anime from "animejs";
import Loading from "./_components/Loading/page";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./_components/Header/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    anime({
      targets: ".hooya path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: function (el, i) {
        return i * 350;
      },
      direction: "alternate",
      loop: false,
      complete: () => {
        setIsLoading(false);
      },
    });
  }, []);
  return (
    <>
      {!isLoading && <Header />}
      <Container>
        {isLoading ? <Loading strokeColor="#0f0f0f" /> : <Title>Home</Title>}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100vw;
  transition: opacity 0.4s ease;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #0f0f0f;
`;
