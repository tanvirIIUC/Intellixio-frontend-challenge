
import { BackToHome } from "@/components/backToHome/backToHome";

export const UserAgent = ({userAgent}:{userAgent:string}) => {

  console.log(typeof(userAgent))

  return (
    <div>
      <BackToHome />

      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};
