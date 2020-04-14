(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),o=(a(13),a(7)),r=a(1),s=a(2),m=a(3),u=a(4),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,i=t.addMovieToWillWatch,l=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.name),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mp-0"},"Rating: ",a.vote_average),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),l(a)}},"Remove Will watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),i(a)}},"Add Will watch")),c.a.createElement("button",{onClick:n.bind(this,a)},"Delete")))}}]),a}(c.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},i=function(e){return"nav-link ".concat(t===e?"active":"")};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc")))}}]),a}(c.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.updatePage,n=function(e){return function(){e>=1&&e<=3&&a(e),console.log(e)}},i=function(e){return"page-item ".concat(t===e?"active":"")};return c.a.createElement("div",null,c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"page-item",onClick:n(t-1)},c.a.createElement("a",{className:"page-link",href:"#"},"Previous")),c.a.createElement("li",{className:i(1),onClick:n(1)},c.a.createElement("a",{className:"page-link",href:"#"},"1")),c.a.createElement("li",{className:i(2),onClick:n(2)},c.a.createElement("a",{className:"page-link",href:"#"},"2")),c.a.createElement("li",{className:i(3),onClick:n(3)},c.a.createElement("a",{className:"page-link",href:"#"},"3")),c.a.createElement("li",{className:"page-item",onClick:n(t+1)},c.a.createElement("a",{className:"page-link",href:"#"},"Next"))))}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("455bf3bcb765b8b07f0bb4d2877f0533","&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.page)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results.filter((function(e){return null!==e}))})}))},e.addMovieToWillWatch=function(t){var a=[].concat(Object(o.a)(e.state.willWatch),[t]);e.setState({willWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.willWatch.filter((function(e){return e.id!==t.id}));e.setState({willWatch:a})},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.updatePage=function(t){e.setState({page:t})},e.state={movies:[],willWatch:[],sort_by:"popularity.desc",page:1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies(),t.page!==this.state.page&&this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(v,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",null,"Will watch: ",this.state.willWatch.length)),c.a.createElement(d,{page:this.state.page,updatePage:this.updatePage})))}}]),a}(c.a.Component);a(14);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd9044e3.chunk.js.map