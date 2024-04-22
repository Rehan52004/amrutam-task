import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import girlImage3 from "/images/girl-image-3.png";
import { FaStar } from "react-icons/fa";
import { TbPill } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import PeopleProfileCard from "../components/PeopleProfileCard";

function FindDoctors() {
	return (
		<>
			<div className="font-nunito">
				<div className="bg-[#EAF2EA] text-center py-16">
					<p className="text-[32px]">
						Find expert Doctors for an In-clinic session here{" "}
					</p>
					<div className="flex flex-wrap justify-center items-center pt-10">
						<div className="bg-white flex items-center py-4 px-3 rounded-[8px]">
							<FaLocationDot
								size={20}
								className="text-[#3A643B]"
							/>
							<p className="mx-2 text-[#767676] text-[16px]">
								Select Location
							</p>
							<FaAngleDown size={22} />
						</div>
						<div className="bg-white flex items-center ml-3 py-4 px-3 w-[40%] rounded-[8px]">
							<input
								type="text"
								placeholder="eg. Doctor, specialisation, clinic name"
								className="w-full placeholder:text-[#7B7B7B] text-[16px]"
							/>
							<FaAngleDown size={22} />
						</div>
					</div>
				</div>

				<div className="border-b-2 border-[#EDEDED] py-5 px-40 flex justify-evenly flex-wrap gap-3">
					<div className="bg-[#F3F3F3] rounded-[7px] flex justify-between p-3 items-center w-[148px]">
						<p className="text-[#585858]">Expertise</p>
						<FaAngleDown size={22} className="text-[#828282]" />
					</div>
					<div className="bg-[#F3F3F3] rounded-[7px] flex justify-between p-3 items-center w-[148px]">
						<p className="text-[#585858]">Gender</p>
						<FaAngleDown size={22} className="text-[#828282]" />
					</div>
					<div className="bg-[#F3F3F3] rounded-[7px] flex justify-between p-3 items-center w-[148px]">
						<p className="text-[#585858]">Fees</p>
						<FaAngleDown size={22} className="text-[#828282]" />
					</div>
					<div className="bg-[#F3F3F3] rounded-[7px] flex justify-between p-3 items-center w-[148px]">
						<p className="text-[#585858]">Language</p>
						<FaAngleDown size={22} className="text-[#828282]" />
					</div>
					<div className="bg-[#DCEEDC] rounded-[7px] flex justify-between p-3 items-center w-[148px]">
						<p className="text-[#3A643B]">All filters</p>
						<FaAngleDown size={22} className="text-[#828282]" />
					</div>
				</div>
				<div className="px-2 xl:px-36 pb-20">
					<div className="flex justify-end my-10">
						<div className="flex items-center bg-[#EAF2EA] rounded-[31px] px-4 py-3 mx-2">
							<p className="mr-2">Hair Care</p>
							<RxCross2 size={20} />
						</div>
						<div className="flex items-center bg-[#EAF2EA] rounded-[31px] px-4 py-3 mx-2">
							<p className="mr-2">Hair Care</p>
							<RxCross2 size={20} />
						</div>
						<div className="flex items-center bg-[#EAF2EA] rounded-[31px] px-4 py-3 mx-2">
							<p className="mr-2">Hair Care</p>
							<RxCross2 size={20} />
						</div>
						<div className="flex items-center bg-[#EAF2EA] rounded-[31px] px-4 py-3 mx-2">
							<p className="mr-2">Hair Care</p>
							<RxCross2 size={20} />
						</div>
					</div>
					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
						<div>
							<PeopleProfileCard />
						</div>
						<div>
							<PeopleProfileCard />
						</div>
						<div>
							<PeopleProfileCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FindDoctors;
