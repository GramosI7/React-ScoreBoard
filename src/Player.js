import React from 'react';



class Player extends React.Component{

    state = {
        score : 0
    }

    More = () => {
        this.setState({
            score : this.state.score +1,
        },() => {
            this.props.totalScorePlus();
        })
        
    }

    Under = () => {
        this.setState({
            score : this.state.score -1,
        },() => {
            this.props.totalScoreMoins();
        })
    }


    render() {
        const {index, element, More, Under, score} = this.props;
        return (
            <React.Fragment>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{element}</td>
                <td>{this.state.score}</td>
            <td>
                <button onClick={this.More} className="btn btn-primary">+</button>
                &nbsp;
                <button onClick={this.Under} className="btn btn-danger">-</button>
            </td>
            </tr>
            </React.Fragment>

        )
    }
} 

    


export default Player;