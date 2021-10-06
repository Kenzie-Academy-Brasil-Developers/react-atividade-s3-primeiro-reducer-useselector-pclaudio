import { useSelector } from "react-redux";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
};

export default FruitsPage;
