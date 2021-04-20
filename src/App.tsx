import "./styles.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getGCF } from "./algorithm";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [gcf, setGcf] = useState(0);
  const [isLeapYear, setIsLeapYear] = useState("NO!!");

  // ユークリッドの互除法
  const onSubmitGCF = (data: any) => {
    console.log(data);
    const gcf = getGCF(data.GCFNumA, data.GCFNumB);
    setGcf(gcf);
  };

  // うるう年判定
  const onSubmitIsLeapYear = (data: any) => {
    console.log(data);
    const gcf = getGCF(data.GCFNumA, data.GCFNumB);
    setGcf(gcf);
  };
  console.log(errors);

  return (
    <div className="App">
      <h1>Algorithm Practice</h1>
      <h2>ユークリッドの互除法</h2>
      <form onSubmit={handleSubmit(onSubmitGCF)}>
        <input
          type="number"
          placeholder="NumA"
          {...register("GCFNumA", { required: true, maxLength: 80 })}
        />
        <input
          type="number"
          placeholder="NumB"
          {...register("GCFNumB", { required: true, maxLength: 100 })}
        />
        <input type="submit" />
      </form>
      <div>最大公約数:{gcf}</div>
      <h2>うるう年</h2>
      <form onSubmit={handleSubmit(onSubmitIsLeapYear)}>
        <input
          type="number"
          placeholder="Year"
          {...register("year", { required: true, maxLength: 4 })}
        />
        <input type="submit" />
      </form>
      <div>うるう年かどうか:{isLeapYear}</div>
    </div>
  );
}
