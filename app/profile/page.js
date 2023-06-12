
import Breadcrumb from '@/components/Template/Breadcrumb';

export const metadata = {
    title: process.env.APP_NAME+' :: Setting > User'
}
export default function ProfilePage() {
    const title_page = { titlePage:'Profile' };
    const crumbs = [
        { label: 'Home',  },
      ];
    
    return (
        <>
            <main className="app-content">
                <Breadcrumb title_page={title_page} crumbs={crumbs}/>
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="col-md-12">
                                <h3 className="tile-title">
                                </h3>
                                <div className="tile-body">
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Frist Name</label><br/>
                                            Sathaphon
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Last Name</label><br/>
                                            
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Email</label><br/>
                                             
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Mobile</label><br/>
                                              
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="control-label">Username</label><br/>
                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
