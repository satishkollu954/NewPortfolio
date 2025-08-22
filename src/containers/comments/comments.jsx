import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import bg from "./background.png";

const Comments = () => {
  return (
    <>
      <div className={`h-screen w-full relative`}>
        <img
          src={bg}
          className="absolute w-full opacity-10 h-screen top-0 left-0 object-cover p-0 m-0"
        />

        <div className=" rounded-xl flex w-fit flex-col border-2 border-dashed px-[10%] py-[2%] shadow-xl">
          <div>"one hell of a guy" </div>
          <div>- New York Times</div>
        </div>


        <div className=" rounded-xl flex w-fit flex-col border-2 border-dashed px-[10%] py-[2%] shadow-xl">
          <div>"Outstanding Gentlemen" </div>
          <div className="pl-[150px]">- WashingTon Post</div>
        </div>


        <div className=" rounded-xl flex w-fit flex-col border-2 border-dashed px-[10%] py-[2%] shadow-xl">
          <div>"I wish i could be more like him"</div>
          <div className="pl-[150px]">- The Most Intresting Man in the
          world</div>
        </div>

        <div className=" rounded-xl flex w-fit flex-col border-2 border-dashed px-[10%] py-[2%] shadow-xl">
          <div>"He is My Super Hero"</div>
          <div className="pl-[150px]">- Spider Man</div>
        </div>
      </div>
    </>
  );
};

export default Comments;
