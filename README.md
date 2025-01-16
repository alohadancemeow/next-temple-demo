# Next-temple-demo: E-Commerce Template

![image](public/Screenshot.png)

A simple e-commerce template for learning [**Next.js**](https://nextjs.org), integrated with [**Ant Design**](https://ant.design/) and [**styled-components**](https://styled-components.com/) to build beautiful and responsive web applications. 

## 🌟 Features  
- ✅ Built with **Next.js**, offering server-side rendering and routing.  
- ✅ Pre-configured with **Ant Design** for flexible UI components.  
- ✅ **styled-components** for dynamic and modular styling.    
- ✅ Easily deployable to **Netlify** with a minimal setup.

## 🚩 Quick Start

To get started with this project, follow these steps:

```bash
# Install dependencies
npm install --save

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## 📝 Learn More

Explore the following resources for more information:

- [Next.js Documentation](https://nextjs.org/docs) - Features and API overview.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial.
- [Ant Design](https://ant.design/) - Comprehensive UI components library.
- [Style-components](https://styled-components.com/) - Modular and efficient styling.


## 🚀 Deploy on Netlify

Create a file called `netlify.toml` in the root of your project. Copy and paste the code snippet below into the netlify.toml file.

```bash
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install the Netlify dependency package

```bash
npm i @netlify/plugin-nextjs
```

## 🧩Commands  

| Command           | Description                        |  
|-------------------|------------------------------------|  
| `npm run dev`     | Starts the development server.     |  
| `npm run build`   | Builds the project for production. |  
| `npm start`       | Runs the production server.        |  
| `npm install`     | Installs dependencies.             |  


## 🎉 Live site 
- [next-temple-demo](https://next-temple-demo.netlify.app/)


