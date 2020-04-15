import React from "react";

class Pagination extends React.Component {
  createElements = (n) => {
    var elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(<li>{i}</li>);
    }
    return elements;
  };

  render() {
    const { page, updatePage } = this.props;
    let arr =  Array.from({length:10},(v,k)=>k+1);
    
    const changePage = (p) => () => {
      if (p >= 1 && p <= 10) {
        updatePage(p);
      }
      console.log(p);
    };

    const getClassName = (p) => {
      return `page-item ${page === p ? "active" : ""}`;
    };

    return (
      <div>
        <ul className="pagination">
          <li className="page-item" onClick={changePage(page - 1)}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>

          {arr.map((item) => {
            return (
              <li key={item} className={getClassName(item)} onClick={changePage(item)}>
                <a className="page-link" href="#">
                  {item}
                </a>
              </li>
            );
          })}

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
