import React from 'react';
import { contentIcons } from '../../../../../utils/contentIcons';
import { ImageSelector, ImageContainer, ImgContent } from '../styles';

const IconSelector = (props) => {
  return (
    <ImageSelector>
      {contentIcons.map((icon, index) => {
        if (props.type === "show") {
          if (props.contentShow.icon === icon.value)
            return (
              <ImageContainer key={index}>
                <ImgContent
                  src={require(`../../../../../${icon.uri}`)}
                  width={80}
                  alt="content-icon"
                />
              </ImageContainer>
            )
          else return null
        } else {
          return (
            <ImageContainer key={index}>
              <ImgContent
                src={require(`../../../../../${icon.uri}`)}
                width={80}
                alt="content-icon"
                onClick={() => props.setEditIcon(icon.value)}
                selected={props.isEditIconSelected(icon.value)}
                alt="content-icon"
              />
            </ImageContainer>
          )
        }
      })}
    </ImageSelector>
  )
}
export default IconSelector; 
