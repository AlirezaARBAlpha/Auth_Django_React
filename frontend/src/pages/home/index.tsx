import Navbar from "../../components/navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import FollowingListWidget from "../widgets/FollowingListWidget";
import AdWidget from "../widgets/AdWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  //const { username, profilePhotoUrl } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default HomePage;
