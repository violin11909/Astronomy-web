export default function Main(props) {
    const {handleToggleModal, showModal, data} = props;

    return (
        <div className="imageContainer">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" onClick={showModal ? handleToggleModal : undefined}/>
        </div>
    );
}