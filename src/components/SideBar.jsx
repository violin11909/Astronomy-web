export default function SideBar(props) {
    const {handleToggleModal} = props;
    
    return (
        <div className="sidebar">
            <div  onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Space</h2>
                <div>
                    <p>Description</p>
                    <p>adfglkfsjdgl kjlkgfjsdkl gjkfdsj gksfjd; kgjks df;g</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}