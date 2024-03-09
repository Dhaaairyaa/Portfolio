export const Navbar = () => {
    return (
        <div className="bg-[#8d6e6e] h-[120px] text-white border-b-2 border-gray-600 max-[1002px]:h-[70px] flex items-center justify-between pl-[30px]">

            <div className="text-[25px] ml-30 max-[1002px]:text-[17px] ">
                Portfolio
            </div>
            <div className=" text-white text-[25px] flex flex-row items-center justify-between space-x-5 mr-8 max-[1002px]:mr-4">
                <a href="mailto:nidhipatel.g@gmail.com" className="max-[1002px]:  max-[1002px]:text-[15px]">Contact</a>
                <a href="https://drive.google.com/file/d/1l2hw0uzDHq_-bhBwpau_4eSZTxdpAX1g/view?usp=sharing" className="max-[1002px]:text-[15px]">Resume</a>
            </div>

        </div>
    );
};