export default function UserProfile({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-1 border-2" >
            <h1>profile</h1>
            <p>profile page <span className="bg-pink-400 p-2 font-bold text-2xl">{params.id}</span></p>
        </div>
    )
}