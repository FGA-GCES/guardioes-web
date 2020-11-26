import React, { useEffect, useState } from 'react';
import {
  AddContentContainer,
  ContainerHeader,
  ContainerTitle,
  ContainerForm,
  InputBlock,
  ImageSelector,
  ImageContainer,
  ImgContent,
  SubmitButton,
  EditInput,
} from '../styles';
import { contentIcons } from '../../../../../utils/contentIcons';
import { useForm } from "react-hook-form";
import createContent from '../services/createContent';
import getAllContents from '../services/getAllContents'
import {
  setContents,
} from 'actions/';
import contentType from '../contentType';


const FormCreateContent = (token, user) => {

  const { handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [icon, setIcon] = useState("");
  const [content_type, setContentType] = useState("");
  const [source_link, setSourceLink] = useState("");

  const isIconSelected = (current) => {
    return current === icon;
  }

  const _getContents = async (token) => {
    const response = await getAllContents(token)
    if (!response.contents || response.contents.length === 0) {
      response.contents = null;
    }
    setContents(response.contents)
  }

  const _createContent = async () => {
    const data = {
      "content": {
        title,
        body,
        icon,
        content_type,
        source_link,
        app_id: user.app_id
      }
    }
    await createContent(data, token).then((response) => {
      if (!response.errors) {
        setTitle("");
        setBody("");
        setIcon("");
        setContentType("");
        setSourceLink("");
        _getContents(token)
      }
    })
  }

  return (
    <AddContentContainer className="shadow-sm">
      <ContainerHeader>
        <ContainerTitle>Adicionar Conteúdo</ContainerTitle>
      </ContainerHeader>
      <ContainerForm>
        <form id="addContent" onSubmit={handleSubmit(_createContent)}>
          <InputBlock>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputBlock>

          <InputBlock>
            <label htmlFor="body">Conteúdo</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="2"
            />
          </InputBlock>

          <EditInput>
            <label>Ícone</label>
            <ImageSelector>
              {contentIcons.map((icon, index) => (
                <ImageContainer key={index}>
                  <ImgContent
                    src={require(`../../../../../${icon.uri}`)}
                    width={80}
                    onClick={() => setIcon(icon.value)}
                    selected={isIconSelected(icon.value)}
                    alt="content-icon"
                  />
                </ImageContainer>
              ))}
            </ImageSelector>
          </EditInput>

          <EditInput>
            <label>Tipo</label>
            <select
              value={content_type}
              onChange={e => setContentType(e.target.value)}
              className="form-control"
              required
            >
              {contentType.map((type, index) => (
                <option key={index} value={type.value}>{type.key}</option>
              ))}
            </select>
          </EditInput>

          <InputBlock>
            <label htmlFor="body">Link da Fonte</label>
            <input
              type="text"
              id="source_link"
              value={source_link}
              onChange={(e) => setSourceLink(e.target.value)}
            />
          </InputBlock>

          <SubmitButton type="submit">
            Criar
          </SubmitButton>
        </form>
      </ContainerForm>
    </AddContentContainer>
  )
}

export default FormCreateContent; 