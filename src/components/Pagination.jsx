import React from "react";

class Pagination extends React.Component {
  render() {
    const {page, updatePage} = this.props;

    const changePage = p => () => {
        if(p >= 1 && p <=3) {
            updatePage(p);
        }
        console.log(p);
    }

    const getClassName = p => {
        return `page-item ${page === p ? "active" : ""}`
    }

    return (
      <div>
        <ul className="pagination">
          <li className="page-item" onClick={changePage(page - 1)}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className={getClassName(1)} onClick={changePage(1)}>
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className={getClassName(2)} onClick={changePage(2)}>
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className={getClassName(3)} onClick={changePage(3)}>
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item" onClick={changePage(page + 1)}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
