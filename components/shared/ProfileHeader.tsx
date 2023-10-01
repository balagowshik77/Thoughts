import Image from "next/image";

interface props{
    accountId:string,
    authUserId:string,
    name:string,
    username:string,
    imgUrl:string,
    bio:string
}

const ProfileHeader = async({accountId,authUserId,name,username,imgUrl,bio}:props) => {
  return (
   <div className="flex w-full flex-col justify-start">
    <div className="flex justify-between items-center ">
        <div className="flex items-center gap-3">
            <div className="relative h-20 w-20 object-cover">
                <Image src={imgUrl} alt={name} fill className="rounded-full object-cover shadow-2xl"/>
            </div>  
            <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">{name}</h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
        </div>

        </div>
    
    </div>
    <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>
    <div className="h-0.5 w-full bg-dark-3 mt-12"/>
   </div>
  )
}

export default ProfileHeader;
