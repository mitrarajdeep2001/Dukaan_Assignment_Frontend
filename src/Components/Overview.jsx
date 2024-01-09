
const Overview = () => {
  return (
    <div className="main-layout-width float-right px-[32px]">
        <div className="flex justify-between items-center w-full my-5">
            <h2 className="font-[500]">Overview</h2>
            <select className="py-1 px-2 bg-white border border-1 border-[#D9D9D9] rounded-[4px]">
                <option>Last Month</option>
                <option>option-2</option>
                <option>option-3</option>
            </select>
        </div>
        <div className="flex justify-between items-center w-full gap-5">
            <div className="flex flex-col gap-[16px] bg-white p-[20px] flex-1 rounded-[8px]">
                <p className="text-[#4D4D4D]">Online orders</p>
                <p className="text-[32px] font-[500]">231</p>
            </div>
            <div className="flex flex-col gap-[16px] bg-white p-[20px] flex-1 rounded-[8px]">
                <p className="text-[#4D4D4D]">Amount received</p>
                <p className="text-[32px] font-[500]">₹23,92,312.19</p>
            </div>
        </div>
    </div>
  )
}

export default Overview