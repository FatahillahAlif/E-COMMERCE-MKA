import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComp() {
  return (
    <Footer container className="mt-[125px] bg-gray-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <a href="https://flowbite.com" className="flex items-center">
              <img
                src="src/assets/DKUMKMP.svg"
                alt="DKMUMKM Logo"
                className="h-[50px] w-[130px]" // Adjust the size here
              />
            </a>
            <span className="flex flex-col mt-1 pl-3 text-xs whitespace-nowrap text-gray-600">
            Sistem Informasi Belanja Terpadu <br/>UMKM Balikpapan<br/> Dengan mendukung dan membeli<br/> produk lokal, anda turut menggerakkan<br/> ekonomi demi kesejahteraan bersama.
              </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp
