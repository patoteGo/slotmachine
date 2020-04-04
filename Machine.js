class Machine extends React.Component {
    
    
    render(){
        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        console.log({s1});
        
        // console.log(this.props, isWinner)
        return <div>
                    <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
                    <div className="winner">
                    You {winner ? "win!" : "lose!"}
                    </div>
                </div>
        
    }
    
}
// export default Machine;