

export default function BtnSaveGroup() {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle" aria-hidden="true"></i> Save</button>
                <div className="btn-group" role="group">
                    <button className="btn btn-primary dropdown-toggle" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div className="dropdown-menu dropdown-menu-right" style={{ position: 'absolute', transform: 'translate3d(35px, 35px, 0px)', top: '0px', left: '0px', willChange: 'transform' }}>
                        <a className="dropdown-item" href="#">Save / Edit</a>
                        <a className="dropdown-item" href="#">Save / View</a>
                    </div>
                </div>
            </div>
        </>
    )
}
