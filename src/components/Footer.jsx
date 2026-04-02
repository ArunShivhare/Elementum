export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-16 bg-[#cfe3d4]">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-800">
        
        {/* Company */}
        <div>
          <h3 className="font-medium mb-3">Company</h3>
          <p>Home</p>
          <p>Studio</p>
          <p>Service</p>
          <p>Blog</p>
        </div>

        {/* Terms */}
        <div>
          <h3 className="font-medium mb-3">Terms & Policies</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Explore</p>
          <p>Accessibility</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-medium mb-3">Follow Us</h3>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Youtube</p>
          <p>Twitter</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <p>14/4B Forum, STB</p>
          <p>DLF Phase 1, 36001</p>
          <p>+123 456 7890</p>
          <p>info@elementum.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-600">
        ©2022 Elementum. All rights reserved
      </div>
    </footer>
  );
}