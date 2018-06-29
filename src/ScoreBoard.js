import React from "react";
import Player from "./Player";
import totalScore from "./TotalScore";
import TotalScore from "./TotalScore";

class ScoreBoard extends React.Component {
    state= {
        totalScore : 0
    }

    totalScorePlus = () => {
      this.setState({
        totalScore : this.state.totalScore +1
      })
    }
    totalScoreMoins = () => {
      this.setState({
        totalScore : this.state.totalScore -1
      })
    }
    render() {
        return (      
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                <th scope="col">Modifier</th>
              </tr>
            </thead>

            <tbody> 
              {this.props.tableau.map((element, index) => {
               return <Player totalScorePlus={this.totalScorePlus} totalScoreMoins={this.totalScoreMoins} totalScore={this.state.totalScore} callback={this.receiveCallback} key={index} index={index} element={element} />
              })}
            
            <TotalScore totalScore={this.state.totalScore}/>
            </tbody>
          </table>
            
        )
    
}  
    
   
        
}

export default ScoreBoard;