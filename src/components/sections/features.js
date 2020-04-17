import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="HVAD ER DIN BOLIG VÆRD?">
    <StyledContainer>
      <Subtitle>Fordele</Subtitle>
      <SectionTitle>Hvad er din bolig værd?</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Gratis</FeatureTitle>
          <FeatureText>100% gratis og uden forpligtelser for dig</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Tag stilling</FeatureTitle>
          <FeatureText>
            Du bestemmer selv om du vil have fysisk vurdering på din adresse
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Modtag din vurderingsrapport</FeatureTitle>
          <FeatureText>
            Vi sender dig en gratis og uforpligtende vurderingsrapport til din
            Email
          </FeatureText>
        </FeatureItem>
        {/* <FeatureItem>
          <FeatureTitle>Aggregation</FeatureTitle>
          <FeatureText>
            Easily link up to 5 banks to your finance account.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Send money to friends and family with ease.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            High interest and rewards for hitting your goals.
          </FeatureText>
        </FeatureItem> */}
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
