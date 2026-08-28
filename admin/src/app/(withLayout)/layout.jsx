import Sidebar from "@/components/Sidebar";

export default function WithLayout({ children }) {
    return (
        <div className="flex w-full min-h-screen">
            {/* Фиксированный сайдбар: не сжимается и не растягивается */}
            <div className="w-64 shrink-0">
                <Sidebar />
            </div>

            {/* Контент: берет все оставшееся место, а его левый край привязан к сайдбару */}
            <div className="flex-1 p-6 ml-8 my-6 mr-8 border border-gray-200 rounded-xl shadow-lg bg-white">
                {children}
            </div>
        </div>
    )
}