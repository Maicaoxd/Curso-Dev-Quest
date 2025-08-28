const root = document.getElementById('root');
const p = React.createElement('p', {}, 'Hello World');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(p);