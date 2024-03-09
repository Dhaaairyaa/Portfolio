import { FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="h-48 pb-10 max-[1002px]:h-auto bg-[#191919] flex flex-row border-r items-center justify-center border-white pr-8 text-center ">

            <div>

                <h1 className="text-5xl text-white mb-5 max-[1002px]:text-4xl max-[1002px]:pt-4 max-[1002px]:mb-1 min-[1002px]:pt-10">Socials</h1>
                <ul className="min-[1002px]:flex max-[1002px]:flex-col max-[1002px]:items-center">
                    <li className="text-5xl text-white min-[1002px]:mr-10">
                        <a href="https://www.linkedin.com/in/nidhi-patel-71b106255/" target="blank" className=" mt-10 max-[1002px]:mt-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#8d6e6e] border-2 border-[#8d6e6e] rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#8d6e6e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative text-3xl"><FaLinkedin></FaLinkedin></span>
                        </a>
                    </li>
                    <li className="text-5xl text-white min-[1002px]:mr-10">
                        <a href="https://www.youtube.com/@NidhiPatelClasses" target="blank" className=" mt-10 max-[1002px]:mt-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#8d6e6e] border-2 border-[#8d6e6e] rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#8d6e6e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative text-3xl"><FaYoutube></FaYoutube></span>
                        </a>
                    </li>
                    <li className="text-5xl text-white">
                        <a href="mailto:nidhipatel.g@gmail.com" target="blank" className=" max-[1002px]:mt-5 mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#8d6e6e] border-2 border-[#8d6e6e] rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#8d6e6e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative text-3xl"><FaEnvelope></FaEnvelope></span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;
