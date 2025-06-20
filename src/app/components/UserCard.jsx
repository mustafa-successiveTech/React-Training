import '../assignment1/assignment1.css';

export default function UserCard({name, email, avatarUrl}) {
    return (
        
            <div className='Card'>
                    <div >
                        <img src={avatarUrl} />
                    </div>

                    <div >
                        <h2>{name}</h2>
                        <h2>{email}</h2>
                    </div>
            </div>          
        
    )
}