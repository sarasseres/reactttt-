import "./style.css";
import iconsidebar from "../../pic/Beranda.svg"
import administrasipengguna from "../../pic/AdministrasiPengguna.svg"
import setting from "../../pic/General Parameter.svg"
import pengaturanperan from "../../pic/pengaturanperan.svg"
import pengaturanbisnis from "../../pic/pengaturanbisnis.svg"
import pengaturanbank from "../../pic/Pengaturan Bank.svg"
import pengaturanbiller from "../../pic/Pengaturan Biller.svg"
import pengaturanlimit from "../../pic/Pengaturan Limit.png"

import kartukredit from "../../pic/Pengaturan MB.svg"




function Sidebar(){
    return (
        <div className="sidebar">
             <img src={iconsidebar} alt="text"/>
             <img src={administrasipengguna} />
             <img src={setting}/>
             <img src={pengaturanperan}/>
             <img src={pengaturanbisnis}/>
             <img src={pengaturanbank}/>
             <img src={pengaturanbiller}/>
             <img src={pengaturanlimit}/>
             <img src={kartukredit}/>
             
             
        </div>
      );
    
};

export default Sidebar;