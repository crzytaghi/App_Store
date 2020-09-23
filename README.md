# App_Store

App_Store is an application that stores the users job applications. Built utilizing the MERN Stack. I implemented a clean UI that enables the user to access the features of the site with little to no instructions.

##Languages Used
- MongoDB (NoSQL)
- Express
- React.js
- Node.js
- JavaScript

## Link to Live Site
[App Store][https://desolate-beach-16443.herokuapp.com/]

## Code Snippets
### Accessing the DB and displaying the data to the user
```JavaScript
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
```
