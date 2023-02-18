export default ({text}) => {
    return (
        <a href="#" className="group relative py-8">
            <span className="group-hover:text-pink-500">{text}</span>
            <span className="absolute bottom-0 left-0 block h-2 w-full scale-x-0 transition-all duration-700 group-hover:scale-x-100 group-hover:bg-pink-500"></span>
        </a>
    )
}