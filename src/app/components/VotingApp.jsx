import { useReducer } from "react"

const initialState = {
    OptionA : 0,
    OptionB : 0,
    OptionC : 0
};

function voteReducer(state, action) {
    switch(action.type) {
        case 'VOTE':
            return {
                ...state,
                [action.payload] : state[action.payload] + 1,
            };
        default :
            return state;
    }
}

export default function VotingApp() {
    const [votes, dispatch] = useReducer(voteReducer, initialState);

    const vote = (option) => {
        dispatch({type : 'VOTE' , payload : option})
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Simple Voting App</h2>
            {Object.keys(votes).map((option) => (
                <div key={option} style={{'margin' : '10px'}}>
                    <button onClick={() => vote(option)}>
                        Vote for {option}
                    </button>
                    <p>{option} has {votes[option]} votes</p>
                </div>
            ))}
        </div>
    )
};