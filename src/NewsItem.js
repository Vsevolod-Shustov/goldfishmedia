import React from 'react';
import PropTypes from 'prop-types';

function NewsItem(props){
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default NewsItem;
