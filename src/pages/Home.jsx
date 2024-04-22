import React from "react";

import { NavLink } from "react-router-dom";

//importing images
import bgBanner from "/images/bg-banner.png";
import girlImage from "/images/girl-image.png";
import girlImage2 from "/images/girl-image-2.jpg";

//react icons
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { MdFace3 } from "react-icons/md";

//social icons
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import PeopleCard from "../components/PeopleCard";

function Home() {
	return (
		<>
			<div className="px-2 xl:px-36 py-10">
				<div className="h-[151px]">
					<img
						src={bgBanner}
						alt="background-banner"
						className="w-full h-full object-cover rounded-t-[12px]"
					/>
				</div>
				<div className="bg-[#FFFBF2] h-fit lg:h-[151px] relative px-16 border-2 border-[#D8D8D8]">
					<div className="w-[159px] h-[159px] absolute left-[40%] lg:left-16 -top-16 lg:-top-8 border-4 border-[#FFFBF2] rounded-full">
						<img
							src={girlImage}
							alt=""
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
					<div className="flex flex-col lg:flex-row justify-between items-center lg:ml-48 pt-28 pb-10 lg:pt-10">
						<div>
							<div className="flex items-center">
								<p className="text-[#212529] text-[20px] mr-1">
									Dr. Bruce Willis
								</p>
								<IoCheckmarkCircle size={20} />
							</div>
							<p className="text-[#3A643B] text-[15px]">
								Gynecologist
							</p>
							<div className="flex items-center">
								<p className="mr-1">4.2</p>
								<FaStar className="text-[#F79624] mx-0.5" />
								<FaStar className="text-[#F79624] mx-0.5" />
								<FaStar className="text-[#F79624] mx-0.5" />
								<FaStar className="text-[#F79624] mx-0.5" />
							</div>
						</div>
						<div className="flex text-center">
							<div className="mx-5">
								<p className="text-[#3A643B] text-[14px]">
									Followers
								</p>
								<p className="text-[#212529] text-[20px]">
									850
								</p>
							</div>
							<div className="mx-5">
								<p className="text-[#3A643B] text-[14px]">
									Following
								</p>
								<p className="text-[#212529] text-[20px]">
									18K
								</p>
							</div>
							<div className="mx-5">
								<p className="text-[#3A643B] text-[14px]">
									Posts
								</p>
								<p className="text-[#212529] text-[20px]">
									250
								</p>
							</div>
						</div>
						<div>
							<button className="bg-[#3A643B] text-[20px] text-white rounded-[11px] px-8 py-3">
								Book an Appoinment
							</button>
						</div>
					</div>
				</div>
				<div className="grid lg:grid-cols-2 gap-5 xl:gap-10 mt-10">
					<div>
						<div className="border-2 border-[#DCDCDC] rounded-[18px] h-fit overflow-hidden">
							<div className="flex justify-between bg-gradient-to-r from-[#FBFCFB] to-[#F4F7EC] p-4">
								<p className="text-[#313131] text-[24px]">
									A Little About me
								</p>
								<div className="flex items-center px-3 py-1 border-2 border-[#3A643B] rounded-[10px]">
									<p className="text-[#585858] text-[16px]">
										Follow
									</p>
									<GoPlus size={22} />
								</div>
							</div>
							<div className="p-5">
								<p className="text-[#33354880] text-[16px] leading-[27px]">
									Hello I am Dr. Bruce Willis a Gynaecologist
									in Sanjivni Hospital Surat. love to work
									with all my hospital staff and seniour
									doctors. Completed my graduation in
									Gynaecologist Medicine from the
								</p>
								<div className="flex items-center">
									<div className="bg-[#797979] w-[80%] h-[1px] mr-5"></div>
									<p className="text-[#2B2B2B] underline">
										Read More
									</p>
								</div>
								<div className="text-[20px] text-[#505050] flex items-center my-5">
									<p className="text-black mr-4">
										Language Spoken
									</p>

									<div className="bg-gray-100 px-3 py-2 rounded-[16px] mx-2">
										English
									</div>
									<div className="bg-gray-100 px-3 py-2 rounded-[16px] mx-2">
										Hindi
									</div>
									<div className="bg-gray-100 px-3 py-2 rounded-[16px] mx-2">
										Telugu
									</div>
								</div>
								<div className="flex">
									<div className="border-[0.3px] border-[#8E8E8E] rounded-full bg-[#F7F7FC] p-3 mr-2">
										<SlSocialFacebook
											size={25}
											className="text-[#3A643B]"
										/>
									</div>
									<div className="border-[0.3px] border-[#8E8E8E] rounded-full bg-[#F7F7FC] p-3 mx-2">
										<SlSocialInstagram
											size={25}
											className="text-[#3A643B]"
										/>
									</div>
									<div className="border-[0.3px] border-[#8E8E8E] rounded-full bg-[#F7F7FC] p-3 mx-2">
										<SlSocialYoutube
											size={25}
											className="text-[#3A643B]"
										/>
									</div>
									<div className="border-[0.3px] border-[#8E8E8E] rounded-full bg-[#F7F7FC] p-3 mx-2">
										<SlSocialTwitter
											size={25}
											className="text-[#3A643B]"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="border-2 border-[#DCDCDC] rounded-[18px] h-fit overflow-hidden mt-10">
							<div className="bg-gradient-to-r from-[#FBFCFB] to-[#F4F7EC] p-4">
								<p className="text-[#313131] text-[24px]">
									I Specialize In
								</p>
							</div>
							<div className="p-5">
								<div className="flex flex-wrap">
									<div className="mx-2">
										<div className="bg-[#FFFCF2] p-6 border-2 border-[#EAEAEA] rounded-[9px]">
											<div className="bg-[#E0E8E2] rounded-full p-6">
												<MdFace3 size={30} />
											</div>
										</div>
										<p className="text-[16px]">
											women’s health
										</p>
									</div>
									<div className="mx-2">
										<div className="bg-[#FFFCF2] p-6 border-2 border-[#EAEAEA] rounded-[9px]">
											<div className="bg-[#E0E8E2] rounded-full p-6">
												<MdFace3 size={30} />
											</div>
										</div>
										<p className="text-[16px]">
											women’s health
										</p>
									</div>
									<div className="mx-2">
										<div className="bg-[#FFFCF2] p-6 border-2 border-[#EAEAEA] rounded-[9px]">
											<div className="bg-[#E0E8E2] rounded-full p-6">
												<MdFace3 size={30} />
											</div>
										</div>
										<p className="text-[16px]">
											women’s health
										</p>
									</div>
									<div className="mx-2">
										<div className="bg-[#FFFCF2] p-6 border-2 border-[#EAEAEA] rounded-[9px]">
											<div className="bg-[#E0E8E2] rounded-full p-6">
												<MdFace3 size={30} />
											</div>
										</div>
										<p className="text-[16px]">
											women’s health
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="border-2 border-[#DCDCDC] rounded-[18px] h-fit overflow-hidden mt-10">
							<div className="bg-gradient-to-r from-[#FBFCFB] to-[#F4F7EC] p-4">
								<p className="text-[#313131] text-[24px]">
									The Concerns I Treat
								</p>
							</div>
							<div className="p-5 flex flex-wrap gap-4">
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Skin Treatment
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Pregnancy
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Period Doubts
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Endometriosis
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Pelvic Pain
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									Ovarian Cysts
								</p>
								<p className="text-[16px] text-[#3A643B] p-3 bg-[#F7F7FC] rounded-[19px] font-[500] w-fit">
									+ 5 More
								</p>
							</div>
						</div>
						<div className="border-2 border-[#DCDCDC] rounded-[18px] h-fit overflow-hidden mt-10">
							<div className="bg-gradient-to-r from-[#FBFCFB] to-[#F4F7EC] p-4">
								<p className="text-[#313131] text-[24px]">
									Featured Reviews (102)
								</p>
							</div>
							<div className="px-5 py-1">
								<PeopleCard
									image={girlImage2}
									name="Alicent Hightower"
									title="Consulted for Skin care"
									joined="20 January 2023"
									bio="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
								/>
								<PeopleCard
									image={girlImage2}
									name="Alicent Hightower"
									title="Consulted for Skin care"
									joined="20 January 2023"
									bio="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
								/>
							</div>
						</div>
					</div>
					<div className="p-8 border-2 border-[#E8E8E8] rounded-[29px] font-nunito h-fit">
						<div className="text-[20px] flex justify-between p-3 border-2 border-[#E2E2E2] rounded-[15px]">
							<p>Appointment Fee</p>
							<p className="text-[#3A643B]">₹699.00</p>
						</div>
						<div className="flex items-center px-1 my-10">
							<p className="text-[20px] font-[700]">
								Select your mode of session
							</p>
							<div className="bg-[#D4D4D4] w-[50%] h-[1px] pl-3 ml-auto"></div>
						</div>
						<div className="flex">
							<div className="border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full">
								<p className="text-[#1F1F1Fx] text-[18px] font-[500]">
									In-Clinic
								</p>
								<p className="text-[#606060]">45 Mins</p>
							</div>
							<div className="border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full mx-5 bg-[#F2FBF2]">
								<p className="text-[#3A643B] text-[18px] font-[600] flex justify-center items-center">
									Video
									<IoCheckmarkCircle
										size={20}
										className="ml-1"
									/>
								</p>
								<p className="text-[#606060]">45 Mins</p>
							</div>
							<div className="border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full">
								<p className="text-[#1F1F1Fx] text-[18px] font-[500]">
									Chat
								</p>
								<p className="text-[#606060]">45 Mins</p>
							</div>
						</div>
						<div className="flex items-center px-1 my-10">
							<p className="text-[20px] font-[700]">
								Select your mode of session
							</p>
							<div className="bg-[#D4D4D4] w-[50%] h-[1px] pl-3 ml-auto"></div>
							<div className="border-[0.5px] border-[#8A8A8A] rounded-full p-2.5 ml-2">
								<FiCalendar className="w-[24px] h-[24px]" />
							</div>
						</div>
						<div className="border-2 border-[#E1E1E1] rounded-[21px] px-6 py-5 flex items-center">
							<div>
								<IoIosArrowDropleft className="w-[20px] h-[20px] text-[#808080]" />
							</div>
							<div className="bg-[#F2FBF2] border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full mx-3">
								<p className="text-[#3A643B] text-[18px] font-[500]">
									Mon, 10 Oct
								</p>
								<p className="text-[#818181]">10 slots</p>
							</div>
							<div className="border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full mx-3">
								<p className="text-[#131313] text-[18px] font-[500]">
									Tue, 11 Oct
								</p>
								<p className="text-[#D5512E]">02 slots </p>
							</div>
							<div className="border-2 border-[#E5E5E5] rounded-[10px] py-3 px-5 text-center w-full mx-3">
								<p className="text-[#0D0D0D] text-[18px] font-[500]">
									Wed, 12 Oct
								</p>
								<p className="text-[#F1B93A]">05 slots </p>
							</div>
							<div>
								<IoIosArrowDropright className="w-[20px] h-[20px] text-[#808080]" />
							</div>
						</div>
						<div>
							<p className="text-[20px] font-[700] mt-10 mb-5">
								Morning
							</p>
							<div className="flex flex-wrap text-center gap-5">
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
							</div>
						</div>
						<div>
							<p className="text-[20px] font-[700] mt-10 mb-5">
								Evening
							</p>
							<div className="flex flex-wrap text-center gap-5">
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										04:00 PM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
								<div className="border-2 border-[#EBEBEB] rounded-[22px] px-5 py-6">
									<p className="text-[#131313] text-[15px]">
										09:00 AM
									</p>
								</div>
							</div>
						</div>
						<div>
							<button className="bg-[#3A643B] text-[20px] text-white rounded-[11px] w-full my-5 py-3">
								Make an Appoinment
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
