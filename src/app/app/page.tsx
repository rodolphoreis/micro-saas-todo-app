import { auth } from "@/services/auth";
import { UserInfo } from "./_components/user-info";

export default async function Page() {
  const session = await auth();
  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <main className="flex items-center justify-center h-screen">
      <UserInfo user={session?.user} />
    </main>
  );
}
