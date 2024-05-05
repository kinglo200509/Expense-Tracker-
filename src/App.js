function App() {
  const remainingHeight = `calc(100vh - 12rem)`
  return (
    <div>
      <div className='min-h-dvh  max-h-dvh   w-full flex-col justify-between bg-[#2A2A2A] px-6 py-6'>
        <div className="flex items-center justify-center text-2xl tracking-tighter font-bold text-[#31EBBB] font-my mb-6">
          EXPENSES TRACKER
        </div>
        <div className=" flex flex-col gap-6 w-full" style={{ height: remainingHeight }}>
          <div className="flex min-w-7 items-center w-full gap-4">
            <div className="w-auto h-12 rounded-lg bg-white flex items-center left-1/2 px-6 text-2xl font-my font-bold text-[#144337]"><span>₹84.00</span></div>
            <div className="w-full h-12 rounded-lg bg-[#9EE493] flex items-center justify-center text-2xl font-my px-6 font-bold">N/A</div>
          </div>
          <div className="flex  flex-col rounded-lg w-full grow   gap-5 ">
            <div className=" rounded-lg  h-1/2 bg-[#9EE493] ">

            </div>
            <div className=" rounded-lg  h-1/2 bg-[#9EE493]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
