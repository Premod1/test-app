import React from "react";
import Cover from "../assest/Rectangle 5985.png";
import Contend01 from "../assest/Rectangle 5987.png";
import Cover2 from "../assest/small.png"

function Content() {
  return (
    <div
      className="absolute text-white w-full md:w-full h-[1645px] right-11 md:left-0 top-72 md:top-[656px] bg-[#0A0D28]
    "
    >
      <div className="">
        <img
          src={Cover}
          alt=""
          className="absolute w-[1426px] h-[1567px] left-[50px] md:left-[130px] "
        />
      </div>
      <div className="absolute">
        <div className="pl-[10%] md:pl-[40%] pt-6">
        <p className=" w-96 md:w-[944px] text-center h-32 md:h-64 font-normal text-lg leading-10">
          Welcome to our Web3HUB blog page! Here you will find valuable insights
          and information on the latest trends, best practices and thought
          leadership in the digitized world. Our team of expert authors share
          their knowledge and expertise with you on the latest topics in the
          digital world. We are committed to providing our readers with useful
          and relevant content that helps them stay informed and ahead of the
          curve. So, no matter what level of person you are, we invite you to
          explore our blog and find new ideas and inspiration.
        </p>
        </div>
        <div className="flex items-center justify-center pl-72">
        <div className="box-border w-32 md:w-[678px] h-32 md:h-[454px] bg-[#0C1033] left-[220px] absolute rounded-2xl z-10">
        <h1 className="pt-4 pl-6 text-sm font-semibold md:text-3xl">More About Web3 Hub</h1>
        <p className="p-6 text-lg font-normal leading-[200%] text-justify">
                At Web3 Hub, we understand the transformative potential of Web3.
                We are committed to bringing the best and brightest minds in the
                industry to one location to help drive innovation and
                growth.With that in mind, we have brought together resources and
                services from Web3 to help you explore, learn, and connect.Our
                website features a wealth of information on various Web3 topics,
                including Web3 Apps/Dapps, Web3 Courses, Web3 Domains, Web3
                Gaming, and Web3 Jobs. We also offer a Web3 blog and news
                section to keep you updated on the latest developments in the
                Web3 space.
              </p>
        </div>
        <div>
        <img src={Contend01} alt="" className="relative top-[-5px] w-32 md:w-[593px] h-32 md:h-[494px] left-[550px] z-1 "/>
        </div>
        </div>
        
        

        <div className="flex items-center justify-center pl-72">
        <div className="box-border w-[678px] h-[454px] bg-[#0C1033] left-[790px] absolute rounded-2xl z-10 top-[900px]">
        
        <p className="p-6 text-lg font-normal leading-[200%] text-justify">
                At Web3 Hub, we understand the transformative potential of Web3.
                We are committed to bringing the best and brightest minds in the
                industry to one location to help drive innovation and
                growth.With that in mind, we have brought together resources and
                services from Web3 to help you explore, learn, and connect.Our
                website features a wealth of information on various Web3 topics,
                including Web3 Apps/Dapps, Web3 Courses, Web3 Domains, Web3
                Gaming, and Web3 Jobs. We also offer a Web3 blog and news
                section to keep you updated on the latest developments in the
                Web3 space.
              </p>
        </div>
        <div>
        <img src={Contend01} alt="" className="relative top-[100px] w-[593px] left-[-100px] z-1 "/>
        </div>
        </div>
      </div>
      <div className="absolute top-[1565px]   ">
        <div>
          <img src={Cover2} alt="" className="w-[1700px] " />
          
        </div>
        <div className="">
        <div className="flex items-center justify-center pl-42">
        <div className="box-border w-32 md:w-[678px] h-32 md:h-[454px] bg-[#0C1033] left-[220px] absolute rounded-2xl z-10 top-[120px]">
        <p className="p-6 text-lg font-normal leading-[200%] text-justify">
                At Web3 Hub, we understand the transformative potential of Web3.
                We are committed to bringing the best and brightest minds in the
                industry to one location to help drive innovation and
                growth.With that in mind, we have brought together resources and
                services from Web3 to help you explore, learn, and connect.Our
                website features a wealth of information on various Web3 topics,
                including Web3 Apps/Dapps, Web3 Courses, Web3 Domains, Web3
                Gaming, and Web3 Jobs. We also offer a Web3 blog and news
                section to keep you updated on the latest developments in the
                Web3 space.
              </p>
        </div>
        <div>
        <img src={Contend01} alt="" className="relative top-[-655px] w-32 md:w-[593px] h-32 md:h-[494px] left-[300px] z-1 "/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
