// esto no funciona pq no hay webpack en ningun lado
// import Machine from './Machine.js'






class App extends React.Component {
	render() {
		return (
			<div>
				<h1>SLOT MACHINE 🍒 💙 💰</h1>
                <div>
                    {/* < Machine slot1="🍒" slot2="💙" slot3="💰"/> */}
                    < Machine s1="🍒" s2="🍒" s3="🍒"/>
                </div>
                
				
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'))