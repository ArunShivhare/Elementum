export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-20 py-20 bg-[#D1E7D6]">
      
      {/* Divider line seen in image */}
      <div className="w-full h-[1px] bg-gray-400/30 mb-20"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[13px] text-gray-800 tracking-tight">
        
        <div className="space-y-4">
          <h3 className="text-lg font-normal mb-6">Company</h3>
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Studio</p>
          <p className="cursor-pointer hover:underline">Service</p>
          <p className="cursor-pointer hover:underline">Blog</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-normal mb-6">Terms & Policies</h3>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Explore</p>
          <p className="cursor-pointer hover:underline">Accesibility</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-normal mb-6">Follow Us</h3>
          <p className="cursor-pointer hover:underline">Instagram</p>
          <p className="cursor-pointer hover:underline">LinkedIn</p>
          <p className="cursor-pointer hover:underline">Youtube</p>
          <p className="cursor-pointer hover:underline">Twitter</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-normal mb-6">Terms & Policies</h3>
          <p className="leading-relaxed">
            1498w Fluton ste, STE <br />
            2D Chicgo, IL 63867.
          </p>
          <p>(123) 456789000</p>
          <p className="font-normal">info@elementum.com</p>
        </div>
      </div>

      <div className="mt-32 text-center text-[11px] text-gray-600 font-medium">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}
