import React from "react";
import { NavLink } from "react-router-dom";
import amrutaLogo from "/images/amrutam-logo.png";
function Navbar() {
	return (
		<div className="bg-[#FFF7E2] flex items-center justify-between px-2 xl:px-36 py-5">
			<nav className="flex items-center">
				<img src={amrutaLogo} alt="" className="w-[259px] h-[49px]" />
				<div className="lg:flex text-[20px] text-[#474747] ml-16 hidden">
					<NavLink
						to="/"
						className={({ isActive }) => (
							isActive ? "text-[#3A643B]" : "", "mx-2"
						)}
					>
						Home
					</NavLink>
					<NavLink
						to="/find-doctors"
						className={({ isActive }) => (
							isActive ? "text-[#3A643B]" : "", "mx-2"
						)}
					>
						Find Doctors
					</NavLink>
					<NavLink
						to="/about-us"
						className={({ isActive }) => (
							isActive ? "text-[#3A643B]" : "", "mx-2"
						)}
					>
						About Us
					</NavLink>
				</div>
			</nav>
			<div className="">
				<button className="border-2 border-[#3A643B] text-[#3A643B] rounded-[11px] px-5 p-2">
					Login
				</button>
				<button className="bg-[#3A643B] text-white ml-2 rounded-[11px] px-5 py-2">
					Sign-up
				</button>
			</div>
		</div>
	);
}

export default Navbar;
