import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/CounterSlice";


function App() {

  const count = useSelector( state => state.counter.value)
  const dispatch = useDispatch();

  return (

    <div class="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10">

        <div class="text-[#0398d4] font-medium text-[20px]]">Increment And Decrement</div>
          <div class="bg-white flex text-[25px] text-[#344151] rounded-md gap-12 py-3 px-5">
            <button
            onClick={() => dispatch(increment())}
            class="border-r-2 border-[#bfbfbf] pr-5 text-3xl  font-semibold">
                +
            </button>

            <div class="font-bold number">
                {count}
            </div>

            <button
            onClick={() => dispatch(decrement())}
            class="border-l-2 border-[#bfbfbf] text-3xl  font-semibold pl-6">
                -
            </button>
        </div>
    </div>
  );
}

export default App;
