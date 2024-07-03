
// function createReactElement(reactElement, mainContainer) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     for (const prop in reactElement.props) {
//         if (prop === "children") continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     mainContainer.appendChild(domElement);
// }


function createReactElement(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    domElement.innerHTML = reactElement.children;
    mainContainer.appendChild(domElement);
}






const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
};


const mainContainer = document.getElementById('root');

createReactElement(reactElement, mainContainer);






































// function customRender(reactElement, mainContainer) {


//     /*
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute("href", reactElement.props.href);
//     domElement.setAttribute("target", reactElement.props.target);
//     mainContainer.appendChild(domElement);
//     */


//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     mainContainer.appendChild(domElement);

// }

// const reactElement = {
//     type: "a",
//     props: {
//         href: "http://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

// const mainContainer = document.getElementById('root');

// customRender(reactElement, mainContainer);