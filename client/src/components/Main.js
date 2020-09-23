import React from 'react';
import axios from 'axios';
import Form from './form';
import Edit from './Edit';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {

  state = {
    app: []
  }

  // ========== MAKE A REQUEST TO THE DB ========== //
  componentDidMount = () => {
    axios.get('/application').then(
      (response) => {
        console.log(response.data);
        this.setState({
          app:response.data
        })
      }
    )
  }

  // ========== CREATE A NEW JOB APPLICATION ========== //
  addApp = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/application',
      {
        status:this.state.statusNew,
        dateSubmitted:this.state.dateSubmittedNew,
        jobTitle:this.state.jobTitleNew,
        company:this.state.companyNew,
        location:this.state.locationNew,
        link:this.state.linkNew
      }
    ).then(
      (response) => {
        console.log(response.data);
        this.setState({
          app:response.data,
          status:null,
          dateSubmitted:null,
          jobTitle:null,
          company:null,
          location:null,
          link:null
        })
      }
    )
  }

  newStatus = (event) => {
    this.setState({
      statusNew:event.target.value
    })
  }

  newDate = (event) => {
    this.setState({
      dateSubmittedNew:event.target.value
    })
  }

  newJob = (event) => {
    this.setState({
      jobTitleNew:event.target.value
    })
  }

  newCompany = (event) => {
    this.setState({
      companyNew:event.target.value
    })
  }

  newLocation = (event) => {
    this.setState({
      locationNew:event.target.value
    })
  }

  newLink = (event) => {
    this.setState({
      linkNew:event.target.value
    })
  }

  deleteApp = (event) => {
    axios.delete('http://localhost:3000/application/' + event.target.value).then(
      (response) => {
        this.setState({
          app:response.data
        })
      }
    )
  }

  render = () => {
    return (
      <div className="main">
      <Header />
      <Form
        addApp={this.addApp}
        newStatus={this.newStatus}
        newDate={this.newDate}
        newJob={this.newJob}
        newCompany={this.newCompany}
        newLocation={this.newLocation}
        newLink={this.newLink}
      />
      <div className="table">
        {this.state.app.map((application,i) =>
            <table key={i}>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Date Submitted</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Edit index={application} /></td>
                  <td>{application.dateSubmitted}</td>
                  <td>{application.jobTitle}</td>
                  <td>{application.company}</td>
                  <td>{application.location}</td>
                  <td><a rel="noopener noreferrer" className="job-link" target="_blank" href={application.link}>{application.jobTitle}</a></td>
                </tr>
                <tr>
                  <td className="delete" colSpan="6"><button onClick={this.deleteApp} value={application._id}>DELETE</button></td>
                </tr>
              </tbody>
            </table>
          )
        }
      </div>
      <Footer />
      </div>
    )
  }
}

export default Main;
