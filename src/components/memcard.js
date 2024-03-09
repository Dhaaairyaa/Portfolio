const Memcard = ({ data }) => {
    const { url } = data;

    return (
        <div className="h-[400px] w-[350px] max-[1002px]:w-auto z-10 bg-[#8d6e6e] flex justify-center items-center p-5 rounded-lg">
            <div style={{ border: '2px solid black' }}>
                <img src={url} alt="memcard" />
            </div>
        </div>
    );
};


export default Memcard;
