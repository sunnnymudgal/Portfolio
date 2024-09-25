import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

function SocialLinkCard({ Icon, link, msg }) {
  return (
    <div className="hover:text-[#6e0dbd] hover:scale-90 transform duration-200 ease-out">
      <a target="_blank" href={link} rel="noopener noreferrer">
        <div className="flex flex-col items-center justify-center">
          <Icon />
          <div className="text-xs font-mono">{msg}</div>
        </div>
      </a>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="bg-[#EDF2FC] pt-10">
      <div className="text-2xl px-[5vh] sm:text-2xl md:text-3xl sm:px-[8vh] md:px-[10vh] lg:px-[12vh] xl:px-[15vh] lg:text-4xl w-full flex py-[3vh] gap-6 rounded-3xl bg-[#EDF2FC] text-[#474849]">
        {/* Using the reusable SocialLinkCard */}
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.8 }}
        >
          <SocialLinkCard
            Icon={IoLogoLinkedin}
            msg="LinkedIn"
            link="https://www.linkedin.com/in/sunny-mudgal/"
          />
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.6 }}
        >
          <SocialLinkCard
            Icon={FaSquareGithub}
            msg="Git Hub"
            link="https://github.com/sunnnymudgal"
          />
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
        >
          <SocialLinkCard
            msg="Twitter"
            Icon={FaXTwitter}
            link="https://x.com/sunnnymudgal"
          />
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
        >
          <SocialLinkCard
            msg="Send Mail"
            Icon={SiGmail}
            link="mailto:sunnyxmudgal@gmail.com"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default SocialLinks;
