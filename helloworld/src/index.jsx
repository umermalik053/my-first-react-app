import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
function Hi() {
  return <div className='run'>
    <center>
      <u> <i><b><h1> CV </h1>  </b></i></u>
      <b><h2> MUHAMMAD UMAR </h2></b>
      <b>ADDRESS:</b>House No L-534 Sector 5\B-1
      North Karachi
    </center>
    <u> <b> <i><h2>Objectives</h2></i></b></u>
    <p>To obtain a challenging position in dynamic organization where I will an opportunity to demonstrate my
      capabilities and useful experience thus contributing toward the prosperity of my organization and my country.</p>
    {/* <h3> <u> <i><b>PERSONAL INFORMATION</b> </i> </u></h3> */}
    <h3> <u> <i><b>PERSONAL INFORMATION</b> </i> </u></h3>
    <ul>
      <li><b>DATE OF BIRTH:</b>        03-AUGUST-2003</li>
      <li><b>CNIC-NO:</b>           42101-5328128-3</li>
      <li><b>RELIGION:</b>       ISLAM</li>
      <li><b>NATIONALITY: </b>      PAKISTAN </li>
      <li><b>MARTIAL STATUS:</b>      UNMARRIED</li>
      <li><b>SEX:</b>    MALE</li>
    </ul>
    <h3> <u> <i><b>EDUCATION</b> </i> </u></h3>
    <ul>
          <li><b> MATRICULATION, (BSEK)</b> </li> </ul>
          <ul>
          Computer Science<b> (2020)</b>
          Oxford Public Sec School</ul>
      
          <ul>
          <li> <b>DIPLOMA OF ASSOCIATE ENGINEERING-DAE (SBTE)</b></li></ul>
          <ul>
            Computer Information Technology-Cit<b>(2020-2023 In Progress)</b>
            Hasani Collage Of Technology
            </ul>
            <h3> <u> <i><b>INTEREST</b> </i> </u></h3>
            <ul>
             <li>Internet Browsing</li>
             <li>Sport Activities</li>
             <li>programing </li>   


            </ul>  
            <h3> <u> <i><b>EXPERIENCE</b> </i> </u></h3>
            <ul>
                <li>Own shop 2 years confectionary and retail export in cash handling and costumer dealing.</li>
                <li>2 year experience in freelancing work </li>
                <li>1 year experience in auto electrition</li>
            </ul>
            <h3> <u> <i><b>REFERENCE</b> </i> </u></h3>
            Available Upon Request
            <h3> <u> <i><b>CONTACT</b> </i> </u></h3>
            <ul>
            <li> <b> PHONE:</b> 03174739213\03112434644</li>
            <li><b>WHATSAPP:</b> 03174739213</li>
            <li><b>EMAIL:</b> um4273209@gmail.com</li>
            </ul>

  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));