

export default function SearchBar({
    searchTerm,
    setSearchTerm
}) {
    return (
        <input 
         type="text"
         placeholder="Search Note..."
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
         className="w-full p-3 mb-4 bg-gray-800 text-white rounded outline-none"
        />
    )
}



