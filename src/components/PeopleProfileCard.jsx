import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { TbPill } from "react-icons/tb";
import girlImage3 from "/images/girl-image-3.png";

function PeopleProfileCard() {
	return (
		<>
			<div className="bg-[#FFF7E2] p-10 w-full border-2 border-[#E3E3E3] rounded-[30px]">
				<div className="relative h-[154px] w-[149px] mx-auto">
					<img
						src={girlImage3}
						alt=""
						className="w-full h-full object-cover rounded-full"
					/>
					<div className="absolute -bottom-2 left-10 bg-gradient-to-r from-[#0B0B0B] to-[#0B0B0BC9] rounded-[17px] px-2.5 py-1 flex items-center w-fit">
						<p className="text-white mr-1">4.5</p>
						<FaStar className="text-[#EFDA3B]" />
					</div>
				</div>
				<p className="text-[32px] text-[#2E2F2E] font-[700] text-center mt-2">
					Dr. Prerna Narang
				</p>
				<div className="pl-5 mt-2 pb-3">
					<div className="flex items-center">
						<TbPill size={20} />
						<p className="ml-2 text-[16px] text-[#646665]">
							Male-Female Infertility
						</p>
					</div>
					<div className="flex items-center">
						<FaGraduationCap size={20} />
						<p className="ml-2 text-[16px] text-[#646665] font-[600]">
							M7 years of Experience
						</p>
					</div>
					<div className="flex items-center">
						<BiCommentDetail size={20} />
						<p className="ml-2 text-[16px] text-[#646665]">
							Speaks: English, Hindi, Marathi
						</p>
					</div>
				</div>
				<div className="flex justify-center text-center gap-3">
					<div className="border-2 border-[#3A643B63] rounded-[10px] p-2">
						<p className="text-[14px] text-[#3C3C3C] font-[600]">
							Video Consultation
						</p>
						<p className="text-[14px] text-[#3A643B] font-[700]">
							₹800
						</p>
					</div>
					<div className="border-2 border-[#3A643B63] rounded-[10px] p-2">
						<p className="text-[14px] text-[#3C3C3C] font-[600]">
							Chat Consultation
						</p>
						<p className="text-[14px] text-[#3A643B] font-[700]">
							Free
						</p>
					</div>
				</div>
				<div>
					<button className="bg-[#FFFFFF] border-2 border-[#3A643B] rounded-[8px] py-3 mt-8 mb-4 w-full">
						View Profile
					</button>
					<button className="bg-[#3A643B] border-2 border-[#3A643B] rounded-[8px] py-3 text-white w-full">
						Book a consultation
					</button>
				</div>
			</div>
		</>
	);
}

export default PeopleProfileCard;
