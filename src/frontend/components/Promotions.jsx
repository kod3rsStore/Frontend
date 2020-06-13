import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Promotions.styl';

const promotions = (props) => {
  const { promotions } = props;
  let styleId = 0;
  const srcId = 'f';
  let srcStyle = '';
  return (
    <div className='Main__Promotions'>
      {promotions.map((promotion) => {
        styleId++;
        srcStyle = srcId + styleId;
        return (
          <Link to={promotion.link} key={styleId}>
            <img key={styleId} id={srcStyle} src={promotion.image} alt={promotion.title} />
          </Link>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    promotions: state.promotions,
  };
};

export default connect(mapStateToProps, null)(promotions);
