import React from 'react'
import styled from 'styled-components'
import hobbyFirst from '..//../assets/images/Hobby_1.webp'
import {FlexWrapper} from '../FlexWrapper'
import {ProjectText, ProjectTitle} from '../../layout/sections/works/work/Work'
import {theme} from '../../styles/theme'


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <ProjectTitle>Badminton</ProjectTitle>
                    <Image src={hobbyFirst} alt="Badminton"/>
                    <ProjectText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.
                    </ProjectText>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;

  ${ProjectText} {
    padding: 10px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.secondaryTextColor};

    & + span {
      margin-left: 10px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
      border-radius: 20px;
    }
  }
`