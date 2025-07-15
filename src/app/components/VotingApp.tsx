import { useReducer } from "react";

type VoteState = {
    OptionA : number,
    OptionB : number,
    OptionC : number,
}

type VoteAction = {
    type : "VOTE",
    payload : keyof VoteState;
}

const initialState : VoteState = {
  OptionA: 0,
  OptionB: 0,
  OptionC: 0,
};

function voteReducer(state : VoteState, action : VoteAction) {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    default:
      return state;
  }
}

export default function VotingApp() {
  const [votes, dispatch] = useReducer(voteReducer, initialState);

  const vote = (option : keyof VoteState) => {
    dispatch({ type: "VOTE", payload: option });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Simple Voting App</h2>
      {Object.keys(votes).map((option) => (
        <div key={option} style={{ margin: "10px" }}>
          <button onClick={() => vote(option as keyof VoteState)}>Vote for {option}</button>
          <p>
            {option} has {votes[option as keyof VoteState]} votes
          </p>
        </div>
      ))}
    </div>
  );
}
