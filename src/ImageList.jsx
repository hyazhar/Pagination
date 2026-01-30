import ImageCard from "./ImageCard";

const ImageList = ({ userdata }) => {
  if (userdata.length === 0) {
    return <p>Data not available</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 px-5">
      {userdata.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ImageList;
