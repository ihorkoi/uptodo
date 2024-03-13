import { ButtonFilled } from "../components/ButtonFilled";
import { ButtonOutlined } from "../components/ButtonOutlined";

const Intro = () => {
  return (
    <main className="pt-[140px] bg-[#121212] text-center h-full">
      <h1 className=" text-[32px] font-bold	text-white">Welcome to UpTodo</h1>
      <p className="text-[16px w-[287px] m-auto font-normal text-white">
        Please login to your account or create new account to continue
      </p>
      <ul className="mt-[370px]">
        <li>
          <ButtonFilled value={"Login"} />
        </li>
        <li>
          <ButtonOutlined value={"Create Account"} />
        </li>
      </ul>
    </main>
  );
};

export default Intro;
