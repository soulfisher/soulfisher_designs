import AdvertisementCard from "./AdvertisementCard";
import Categories from "./Categories";
import PopularTags from "./PopularTags";
import RecentPost from "./RecentPost";
import SearchBox from "./SearchBox";

const BlogSidebar = () => {
  return (
    <div className="flex flex-col gap-10">
      <SearchBox />
      <RecentPost />
      <Categories />
      <AdvertisementCard />
      <PopularTags />
    </div>
  );
};
export default BlogSidebar;
