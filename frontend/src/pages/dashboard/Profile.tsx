import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { authSlice } from "../../features/auth/authSlice";
import useSWR from 'swr';
import { fetcher } from "../../utils/axios";
import { AccountResponse } from "../../types/auth";
import { RootState } from "../../store";
import ProfileAppBar from "../../components/navbar/profile";

const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  const userId = account?.user.id;

  const user = useSWR<AccountResponse>(`http://localhost:8000/api/user/${userId}/`, fetcher)

  return (
    <div className="w-full h-screen">
      <ProfileAppBar/>
        {
            user.data ?
                <div className="w-full h-full text-center items-center">
                    <p className="self-center my-auto">Welcome, {user.data?.user.email}</p>
                </div>
                :
                <p className="text-center items-center">Loading ...</p>
        }
    </div>
  );
};

export default Profile;