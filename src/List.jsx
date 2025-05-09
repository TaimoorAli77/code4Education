import { useEffect, useMemo, useDeferredValue } from "react";

const List = ({ input }) => {
  const DataSize = 100;
  const defferedValue = useDeferredValue(input);
  const list = useMemo(() => {
    const a = [];
    for (let index = 0; index < DataSize; index++) {
      a.push(<div key={index}>{defferedValue}</div>);
    }
    return a;
  }, [defferedValue]);

  useEffect(() => {
    console.log(`Input : ${input} \n Deffered Value : ${defferedValue}`);
  }, [input, defferedValue]);
  return list;
};

export default List;
