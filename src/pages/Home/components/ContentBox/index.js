import React from 'react';
import TableComponent from './Table'
import { Link } from 'react-router-dom';
import Loading from 'sharedComponents/Loading'
import {
  Container,
  ContentBoxHeader,
  ContentBoxTitle,
  ContentBoxTable
} from './styles';

const ContentBox = ({
  title,
  fields,
  contents,
  delete_function,
  token,
  handleEdit,
  handleShow,
  component_height
}) => {

  const _deleteApp = async (id, token) => {
    await delete_function(id, token)
  };

  const setEditingContent = (content) => {
    handleEdit(content);
  };

  const setContentShow = (content) => {
    handleShow(content);
  };

  return (
    <Container
      className="shadow-sm"
      component_height={component_height}
    >
      <ContentBoxHeader>
        <ContentBoxTitle>{title}</ContentBoxTitle>
      </ContentBoxHeader>
      <ContentBoxTable
        component_height={component_height}
      >
      {contents !== null ?
        contents.length > 0 ?
          <TableComponent
            contents={contents}
            fields={fields}
            _deleteApp={_deleteApp}
            setContentShow={setContentShow}
            setEditingContent={setEditingContent}
            token={token}
          /> :
          <Loading isLoading={true} />
        : null
      }
      </ContentBoxTable>
    </Container>
  );
};

export default ContentBox;