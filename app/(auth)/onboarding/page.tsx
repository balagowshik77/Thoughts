import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

async function page(){
    const user:any = await currentUser();
    const userInfo = await fetchUser(user.id)
    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username:userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl

    }
    return(
    <main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
        <h1 className="head-text">onboarding</h1>
        <p className="mt-3 text-base-regular text-light-2">Complete your profile now to use Thoughts</p>
        <section className="p-10 bg-dark-2 mt-9">
            <AccountProfile user={userData} btnTitle = "Continue"/>
        </section>
    </main>
    )
}
export default page;