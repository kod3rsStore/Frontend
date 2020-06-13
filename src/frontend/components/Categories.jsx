import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Categories.styl';

const Categories = (props) => {
  const { categories } = props;
  let styleId = 0;
  return (
    <div className='Main__Categories'>
      {categories.map((category) => {
        styleId++;
        return (
          <div className='Main__Category' key={styleId}>
            <span className='Main__Category--title' key={styleId}>{category.title}</span>
            <div className='Main__Category--img'>
              <Link to={category.link} key={styleId}>
                <picture key={styleId}>
                  <source srcSet={category.imageBig} media='(min-width: 1200px)' />
                  <source srcSet={category.imageMedium} media='(min-width: 600px)' />
                  <img src={category.imageSmall} alt='category' key={styleId} />
                </picture>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, null)(Categories);
