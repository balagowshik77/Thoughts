"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl, personType }: props) => {
  const router = useRouter();
  return (
    <article className="user-card">
      <div className="user-card_avatar ">
      <div className='relative h-12 w-12'>
              <Image
                src={imgUrl}
                alt='logo'
                fill
                className='cursor-pointer rounded-full object-cover'
              />
            </div>

        <div className="flex-1 text-ellipsis">
          <h2 className="text-base-semibold text-light-1">{name}</h2>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
