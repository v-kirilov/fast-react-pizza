//This can be called spinner or loading indicator of something else cause this is confusing
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>;
    </div>
  );
}

export default Loader;
