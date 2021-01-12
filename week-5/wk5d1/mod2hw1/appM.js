//import Sidebar from './components/Sidebar.js';
//import WebsiteVisitors from './components/WebsiteVisitors.js';
//import Average from './components/Average.js';
//import Sentiment from './components/Sentiment.js';
//import Reviews from './components/Reviews.js';





//border outline
class Border extends React.Component {
    render () {
      return (
        <div class="border">
            <Sidebar />
            <Reviews />
            <Average />
            <Sentiment />
            <WebsiteVisitors />
           
        </div>
      )
    }
  }
  // header
  class Header extends React.Component {
      render () {
          return (
              <h1>commence Dashboard Creation!</h1>
          )
      }
  }
// sidebar
  class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online analysis</p>
            </div>
        )
    }
}
// reviews
class Reviews extends React.Component {
  render() {
      return (
          <div class="reviews">
              <p>Review</p>
              <p>1,281</p>  
          </div>
      )
  }
}
// average
class Average extends React.Component {
  render() {
      return (
          <div class="average">
              <p> Average Rating </p>
              <p>4.6</p>
          </div>
      )
  }
}
//website visitors
class WebsiteVisitors extends React.Component {
  render() {
      return (
          <div class="visitors">
              <p>Website Visitors</p>
                <p>821</p>
              <BottomBlockInside />
          </div>
      )
  }
}
// analysis
class Sentiment extends React.Component {
  render() {
      return (
          <div class="sentiment">
              <p>Sentiment Analysis</p>
              
          </div>
      )
  }
}
// block inside website visitors
class BottomBlockInside extends React.Component {
  render() {
      return (
          <div>
              
          </div>
      )
  }
}
//app
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Border />
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )