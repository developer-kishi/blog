import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Profile = () => {
  const data = useStaticQuery(graphql`
    {
     site { 
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar></Avatar>
        <S.ProfileAuthor>
          {data.site.siteMetadata.author}
          <S.ProfilePosition>{data.site.siteMetadata.title}</S.ProfilePosition>   
        </S.ProfileAuthor>
        
      </S.ProfileLink>
      <S.ProfileDescription>
        {data.site.siteMetadata.description}
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile;


/*

            <
            */