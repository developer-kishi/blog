import styled from 'styled-components'

export const SocialLinkWrapper = styled.nav`
margin: 2rem auto;
width: 100%;
`

export const SocialLinkList = styled.ul`
align-items: center;
display: flex;
justify-content: space-around;
list-style: none;
`

export const SocialLinkItem = styled.li` `

export const SocialLinkLink = styled.a`
color: var(--texts);
text-decoration: none;
transiction: color 0.5s;

&:hover {
    color: var(--highlight)
}
`
export const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height:30px;
`