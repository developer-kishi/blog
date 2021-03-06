import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath: { eq: "pp.jpg" }){
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `
    )
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fluid}/>

}

export default Avatar