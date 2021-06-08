// const element = React.createElement('div', {}, 'Hello world', React.createElement('h2', {className: 'heading'}, 'Narayana' ));

// ReactDOM.render(element, document.getElementById('app'));

//by using babel compiler we can directly write html in javascript file. the compiler converts our html to jsx

// const element2 = (
//   <div>
//     <div>Hello world with JSX</div>
//     <h2>Narayana</h2>
//   </div>
// )
// ReactDOM.render(element2, document.getElementById('app'));

//JSX

//we can embed any valid expression in jsx
// const channelName = 'Random Things';

//embedding methods
// function mySubscribers() {
//   if(channelName === 'Random Things'){
//     return '5 Million';
//   } else{
//     return 'Nothing'
//   }
  
// }

// const element3 = (
//   <div>
//     <div className="greet">Hello world with JSX</div>
//     <p>
//       My YouTube channel name is <b>{channelName}</b>
//     </p>
//     <p>
//       My subscriber count is <b>{mySubscribers()}</b>
//     </p>
//     <h2>{2 + 2}</h2>
//   </div>
// );
// ReactDOM.render(element3, document.getElementById('app'));






//Example for virtual DOM 
//react uses diffing algorithm in virtual DOM, so that it renders only updated changes in the DOM

//using normal HTML
function render(){
  const element4 = `<div>
                    <div>Hello</div>
                    <div><input type="text" /></div>
                    <div>${new Date().toLocaleTimeString()}</div>
                  </div>
                `

document.getElementById('app1').innerHTML = element4;

<br />
//using react JSX

const element5 = 
          <div>
            <div>Hello</div>
            <div><input type="text" /></div>
            <div>{new Date().toLocaleTimeString()}</div>
          </div>;

ReactDOM.render(element5, document.getElementById('app2'));
}

setInterval(render, 1000);