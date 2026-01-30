const ImageCard = ({ item }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg w-[300px]">
        <img
          src={item.download_url}
          alt={item.author}
          className="h-40 w-full object-cover rounded mb-2"
        />
        <h3 className="font-bold">{item.author}</h3>
      </div>
    );
  };
  
  export default ImageCard;
  