import React from 'react';
import contentType from '../contentType';

const TypeSelector = (props) => {
  return (
    <>
      { props.type === 'show' ?
        <select value={props.contentShow.content_type}
          className="form-control"
          disabled
        >
          {contentType.map((type, index) => (
            <option key={index} value={type.value}>{type.key}</option>
          ))}
        </select> :
        <select value={props.editContentType}
          onChange={e => props.setEditContentType(e.target.value)}
          className="form-control"
        >
          {contentType.map((type, index) => (
            <option key={index} value={type.value}>{type.key}</option>
          ))}
        </select>
      }
    </>
  )
}
export default TypeSelector;