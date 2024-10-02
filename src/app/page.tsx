"use client";

import anime from "animejs";
import Loading from "./_components/Loading/page";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

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
        setTimeout(() => {
          setShowContent(true);
        }, 400);
      },
    });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading strokeColor="#0f0f0f" />
      ) : (
        <Title show={showContent}>Home</Title>
      )}
    </Container>
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

const Title = styled.h1<{ show: boolean }>`
  font-size: 3rem;
  font-weight: 600;
  color: #0f0f0f;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.4s ease;
`;
