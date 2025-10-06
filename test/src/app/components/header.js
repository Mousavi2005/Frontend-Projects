export default function Header() {
    return (
        <div className="w-full h-24 bg-amber-200 flex flex-col items-center">
            <div className="w-full flex items-center bg-blue-300 gap-4 p-2">
                <div className="w-9 h-9 rounded-sm bg-gray-400"></div>
                <div className="flex-1 h-9 rounded-sm bg-gray-400"></div>
            </div>
            <div className="w-full flex-1 bg-pink-300 flex items-center p-2">
                <p className="text-black w-full flex-1 bg-green-200 text-right">ارسال به استان تهران، شهر تهران</p>
            </div>
        </div>
    )
}
