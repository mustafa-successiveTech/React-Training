'use client'
import { useRouter } from "next/navigation"

const availQuestion = [1, 2];

export default function Assignment6() {
    const router = useRouter();

    const handleClick = (Qno : number) => {
        if(availQuestion.includes(Qno)){
            router.push(`/assignment6/question${Qno}`);
        } else {
            router.push('Not Found');
        }
    }

    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'10px', padding:'10px', gap:'10px'}}>
            {[1, 2, 3].map((num) => (
                <button key={num} onClick={() => handleClick(num)}>
                    Question {num}
                </button>
            ))}
        </div>
    )
}