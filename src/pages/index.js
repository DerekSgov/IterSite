import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Ray from '../assets/images/ray.jpg'
import Laura from '../assets/images/laura.jpg'
import Margaret from '../assets/images/Margaret.jpg'
import William from '../assets/images/William.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Iter Canada" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Our Purpose</h2>
                </header>
                <p>
                Iter Canada is a not-for-profit corporation dedicated to the achievement of learning in the study and teaching of the Middle Ages and Renaissance (400 to 1700) through the development and distribution of online resources. To this end, Iter Canada is responsible for the programs and initiatives associated with Iter Community and for contributing to Iter Press.
                </p>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Who We Are</h2>
            </header>
            <h3>Officers</h3>
            <ul className="features">
            <li>
              <span className="image"><img src={William} alt=""/></span>
                <h3>William R. Bowen</h3>
                <p>President</p>
              </li>
              <li>
              <span className="image"><img src={Margaret} alt=""/></span>
                <h3>Margaret English-Haskin</h3>
                <p>Secretary</p>
              </li>
            </ul>
            <h3>Board of Directors</h3>
            <ul className="features">
            <li>
              <span className="image"><img src={William} alt=""/></span>
                <h3>William R. Bowen</h3>
              </li>
              <li>
              <span className="image"><img src={Laura} alt=""/></span>
                <h3>Laura Estill</h3>
              </li>
              <li>
              <span className="image"><img src={Ray} alt=""/></span>
                <h3>Raymond G. Siemens</h3>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
              <p>
                Please feel free to come take a look at our 
                current projects and projects in development!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://itercommunity.org" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
