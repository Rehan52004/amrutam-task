import React from "react";
import { FaStar } from "react-icons/fa";

function PeopleCard(props) {
	const { image, name, title, bio, joined } = props;
	return (
		<div className="bg-[#FAFAFA] p-8 rounded-[17px] mt-8">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="w-[54px] h-[56px] mr-2">
						<img
							src={image}
							alt="girl-image-2"
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
					<div>
						<p className="text-[20px] text-[#2F2F2F]">{name}</p>
						<p className="text-[16px] text-[#939393]">{title}</p>
					</div>
				</div>
				<p className="text-[16px] text-[#979797]">{joined}</p>
			</div>
			<div>
				<div className="flex gap-1 mt-5 mb-3">
					<FaStar className="text-[#F79624] mx-0.5" />
					<FaStar className="text-[#F79624] mx-0.5" />
					<FaStar className="text-[#F79624] mx-0.5" />
					<FaStar className="text-[#F79624] mx-0.5" />
					<FaStar className="text-[#F79624] mx-0.5" />
				</div>
				<p className="text-[16px] text-[#2E2F2E] leading-[24px]">
					{bio}
				</p>
			</div>
		</div>
	);
}

export default PeopleCard;
