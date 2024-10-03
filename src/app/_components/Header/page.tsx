"use client";

import Image from "next/image";
import styled from "styled-components";
import Global from "@/app/_assets/icons/global.svg";
import Arrow from "@/app/_assets/icons/arrow.svg";
import Dark from "@/app/_assets/icons/dark.svg";
import White from "@/app/_assets/icons/white.svg";

export default function Header() {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>HOOYU</Title>
            <Line />
            <SubTitle>Front Dev</SubTitle>
          </TitleWrapper>
          <DarkModeWrapper>
            <DarkModeLogo src={Dark} alt="dark" width={24} height={24} />
            <DarkModeLogo src={White} alt="white" width={24} height={24} />
          </DarkModeWrapper>
          <LanguageWrapper>
            <LanguageLogo src={Global} alt="global" width={24} height={24} />
            <LangaugeText>한국어</LangaugeText>
            <LanguageArrow src={Arrow} alt="arrow" width={24} height={24} />
          </LanguageWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;

  padding: 0.625rem 2.5rem;

  width: 100%;
  height: 60px;

  border: 1px solid red;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1px solid blue;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 155px;
  width: 100%;
  height: 100%;

  gap: 10px;
`;

const Title = styled.h1`
  color: #0f0f0f;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const Line = styled.div`
  width: 1px;
  height: 15px;
  background: #0f0f0f;
`;

const SubTitle = styled.h2`
  color: #b1b1b1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
`;

const DarkModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 120px;
  width: 100%;
  height: 100%;

  padding: 0.5rem 1.25rem;

  background-color: #ecebeb;
  border: none;
  border-radius: 12px;

  gap: 32px;
`;

const DarkModeLogo = styled(Image)``;

const LanguageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  max-width: 155px;
  width: 100%;
  height: 100%;

  gap: 6px;
`;

const LanguageLogo = styled(Image)``;

const LangaugeText = styled.p`
  color: #0f0f0f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LanguageArrow = styled(Image)``;
