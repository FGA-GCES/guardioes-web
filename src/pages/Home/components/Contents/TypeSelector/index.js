import React from 'react';

const TypeSelector = (props) => {

  const contentTypeSelect = [
    {
      key: "Conselho",
      value: "text"
    },
    {
      key: "Redirecionamento",
      value: "redirect"
    }
  ];

  return (
    <>
      { props.type === 'show' ?
        <select
          value={props.contentShow.content_type}
          className="form-control"
          disabled
        >
          {contentTypeSelect.map((type, index) => (
            <option key={index} value={type.value}>{type.key}</option>
          ))}
        </select> :
        <select
          value={props.editContentType}
          onChange={e => props.setEditContentType(e.target.value)}
          className="form-control"
        >
          {contentTypeSelect.map((type, index) => (
            <option key={index} value={type.value}>{type.key}</option>
          ))}
        </select>
      }
    </>
  )

}

export default TypeSelector;