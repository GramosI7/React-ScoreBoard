import React from "react";

const TotalScore = (props) => {
    const {totalScore} = props;
    return (
              <tr>
                <th scope="col">Total Score</th>
                <th scope="col"></th>
                <th scope="col">{totalScore}</th>
                <th scope="col"></th>
              </tr>
    )
}

export default TotalScore;