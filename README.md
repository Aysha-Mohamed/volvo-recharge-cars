
# Volvo Cars Sverige

This React app with TypeScript showcases a collection of Volvo Recharge cars and provides features for filtering and displaying car details.


## Project Setup

I initiated the creation of this app using Create React App with TypeScript:

```sh
npx create-react-app volvo-recharge-cars --template typescript

```


The project is hosted on Netlify [here](https://wonderful-sable-cf8271.netlify.app/).






## Features

### Styling

For styling, I used the **"@volvo-cars/css"** package and **vcc-ui**, which includes Volvo's CSS styles. I also customized some styles for specific elements.

### Responsive Design
The app is designed to be responsive, adapting to different screen sizes. It provides an optimal viewing experience on both desktop and mobile devices.

### Routing
The project includes routing using React Router. I've created routes for displaying car details based on car IDs.

I've generated the links to the learn and shop pages of each car by concatating the id of the car to the learn (/learn/) and shop (/shop/) urls. 

You can navigate to learn and shop page by clicking on the ***Learn*** and ***Shop*** displayed in the Car list.

In detail page, a button for ***Shop*** is provided, which can be used to navigate to Shop page too.

### Components and Interfaces
I created components for displaying the car list and individual car details. To handle data types, I used TypeScript interfaces. 
I have created components, interfaces to achieve ***reusability*** and ***Separation of concerns***.

### Filtering by Body Type
I added a feature to filter cars by body type. I used the **<Select>** component from **"@volvo-cars/react-forms"** to create a dropdown list for selecting body types.


### Slides
For creating slides, I used the **"react-splide"** library. Slides are used to display car details with images and information.

### Continuous Deployment with GitHub and Netlify

This project is set up for continuous deployment using GitHub and Netlify. Any changes made to the GitHub repository automatically trigger updates to the deployed webpage on Netlify. This ensures that the live site is always up to date with the latest changes in the codebase.

### Responsive Design
The app is designed to be responsive, adapting to different screen sizes. It provides an optimal viewing experience on both desktop and mobile devices.

- In the desktop view, users can navigate through the slides using ***arrow buttons***. However, in the mobile view, ***pagination*** is available for slide navigation.
- In the desktop view, the Learn page features a Shop button located near the car details. In the mobile view, this button is positioned fixed at the bottom of the screen.


### Context API
To manage and share data across components, I implemented the **Context API**. The data context is created and provided in context file. Components that need access to the data use the useContext hook to retrieve it.




## Conclusion

I am excited to submit this project as part of my application for the Volvo job opportunity. It has been a rewarding experience working on this assignment and developing this React app. I believe that the features, styling, and responsive design of this application reflect my commitment to delivering high-quality work.

If you have any questions or need further information regarding this project or my application, please feel free to [contact](ayshamohd01@gmail.com) me. I am looking forward to the possibility of contributing to Volvo's innovative projects and becoming a valuable member of your team.

Thank you for considering my application.

Best regards,

Aysha Mohamed.