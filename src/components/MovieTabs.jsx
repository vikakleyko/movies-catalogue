import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    //console.log("tabs should component update");
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    // console.log("tabs render");
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => () => {
      updateSortBy(value);
    };

    const getClassName = (value) => {
      return `nav-link ${sort_by === value ? "active" : ""}`;
    };

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassName("popularity.desc")}
            onClick={handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("revenue.desc")}
            onClick={handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}
          >
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
