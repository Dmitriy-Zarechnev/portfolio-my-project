import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../components/FlexWrapper'
import {SocialList} from '../../components/socialList/SocialList'
import {theme} from '../../styles/theme'
import {Container} from '../../components/Container'
import {font} from '../../styles/Common'

const itemsIcons: Array<string> = ['gitHubSocialLink', 'gmailSocialLink', 'whatsappSocialLink', 'telegrammSocialLink']
const iconsViewBox: Array<string> = ['0 0 30 30', '-0.5 0 48 48', '0 0 32 32', '2 2 20 20']
const iconsSize: Array<string> = ['30', '30', '30', '30']
// const iconsObj: Array<object> = [
//     {
//         id: 'gitHubHead',
//         size: '40',
//         viewBox: '0 0 30 30',
//         fill: 'white'
//     },
//     {
//         id: 'gmailHead',
//         size: '40',
//         viewBox: '-0.5 0 48 48',
//         fill: 'white'
//     },
//     {
//         id: 'whatsappHead',
//         size: '40',
//         viewBox: '0 0 32 32',
//         fill: 'white'
//     },
//     {
//         id: 'telegrammHead',
//         size: '50',
//         viewBox: '0 0 24 24',
//         fill: 'white'
//     }
// ]


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-between'} align={'center'} gap={'10px'}>
                    <PhoneMail>+7 920-874-3215</PhoneMail>
                    <PhoneMail>zarechnev5021@gmail.com</PhoneMail>
                    <FlexWrapper gap={'20px'} align={'center'}>
                        <SocialList iconsLink={itemsIcons} iconsSizesViewBox={iconsViewBox} iconsSize={iconsSize}/>
                    </FlexWrapper>
                    <Copyright>
                        Designed and built by
                        <SmallSpan> Zarechnev Dmitriy </SmallSpan>
                        with
                        <SmallSpan> Love </SmallSpan>
                        &
                        <SmallSpan> Tea</SmallSpan>
                    </Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`

const PhoneMail = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, color: theme.colors.primaryTextColor, lineHeight: 1.4, fontD: 18, fontM: 16})};
`

const Copyright = styled.small`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`

const SmallSpan = styled.span`
  font-weight: bold;
  background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
  color: transparent;
  -webkit-background-clip: text;
`