import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

const SortingPopup = (props) => {
  const sorts = [
    {
      id: `POPULAR`,
      name: `Popular`,
    },
    {
      id: `PRICE_ASC`,
      name: `Price: low to high`,
    },
    {
      id: `PRICE_DESC`,
      name: `Price: high to low`,
    },
    {
      id: `RATING_DESC`,
      name: `Top rated first`,
    }
  ];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          props.setSortingPopupVisible(true);
        }}
      >
        {props.sorting.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${props.sortingPopupVisible ? `places__options--opened` : ``}`}>
        {sorts.map((sort, index) =>
          <li
            key={index}
            className={`places__option ${props.sorting.id === sort.id ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => {
              props.setSorting(sort);
              props.setSortingPopupVisible(false);
            }}
          >{sort.name}</li>
        )}
      </ul>
    </form>
  );
};

SortingPopup.propTypes = {
  setSorting: PropTypes.func,
  setSortingPopupVisible: PropTypes.func,
  sorting: PropTypes.string,
  sortingPopupVisible: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sorting: state.sorting,
  sortingPopupVisible: state.sortingPopupVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setSorting(sorting) {
    dispatch(ActionCreator.setSorting(sorting));
  },
  setSortingPopupVisible(visible) {
    dispatch(ActionCreator.setSortingPopupVisible(visible));
  }
});

export {SortingPopup};
export default connect(mapStateToProps, mapDispatchToProps)(SortingPopup);
