function extractBodyContent(htmlString) {
    const afterBody = htmlString.split("<body>")[1];
    const bodyContent = afterBody.split("</body>")[0];

    return bodyContent;
}
console.log(extractBodyContent(`<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`))