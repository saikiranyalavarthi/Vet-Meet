import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-black py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Online Shopping */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Online Shopping</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <a href="#">Dogs</a>
            </li>
            <li>
              <a href="#">Cats</a>
            </li>
            <li>
              <a href="#">Small Pets</a>
            </li>
            <li>
              <a href="#">Consult a Vet</a>
            </li>
            <li>
              <a href="#">Dog Behaviour</a>
            </li>
            <li>
              <a href="#">Pet Pharmacy</a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <a href="#">Vet&Meet+ Clinic</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Vet&Meet Companion</a>
            </li>
            <li>
              <a href="#">Vet&Meet</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Refer and Save</a>
            </li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-black mb-2">📞 1800-5723-575</p>
          <p className="text-sm text-black mb-4">📧 support@Vet&Meet.com</p>

          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex flex-wrap gap-2 text-sm text-black">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Experience Vet&Meet App</h4>
            <p className="text-sm text-black">
              Download from App Store / Play Store
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Popular Searches</h2>
      <p className="text-1xl leading-9">
        Dog Food | Dog Collars Leashes Harnesses | Me-O| Cat Clothes | Cat
        Litter | Dog Raincoat | Dog Toys | Dog Beds | Veg Dog Food | Dog
        Biscuits Cookies | Cat Dry Food | Cat Food | Pet Pharmacy | Pedigree |
        Cat Toys | Drools | Royal Canin | Dog Grooming | Dog Carrier | Dogs
        Bones Chews | Pedigree Pro | Sheba | Whiskas | Cat Collars Leashes
        Harnesses | Cat Wet Food | Dog Shampoos & Conditioners | Cat Carriers
        Travel Supplies | Dog Accessories | Dog Bowls Feeders | Dog Clothes |
        Dog Treats | Cat Accessories | Cat Litter Boxes | Cat Treats | Farmina |
        Dog Leashes | Cat Kitten Food | Cat Beds Mats Tents | Deworming Tablets
        | Cat Shampoo & Conditioners | Dog Fleas & Ticks | Dog Boots | Orijen
        Dog Food | Acana Dog Food | Dog Training & Behaviour | Dog Food
        Supplements & Vitamins | Dog Sweaters | Dog Jackets | Blanket & cushions
        | Shoes Boots & Socks | Sherwani | Raincoats | Dog Skin & Coat Care |
        Skin Care | Shampoos & Conditioners | Calcium Supplements | Join Pain
        Medication | Gut Health Care | Bow-ties | Ethnic wear | Dog Toys | Dog
        Beds | Cat Sweaters & Hoodies | Furry & Plush Cat Beds | Cat Shampoos &
        Conditioners | Fleas & Ticks Care | Cat Joint care Supplements | Cat
        Skin Care Products | Anxiety Care & Comforting Products | Interactive
        Cat Toys | Catnip Toys | Clumping Cat Litter | Deodorizers & Litter
        Fresheners | Litter Boxes & Cat Toilets | Rabbit Products | Fish Food |
        Bird Food.
      </p>
      <div className="text-center text-sm text-balck mt-10">
        &copy; {new Date().getFullYear()} Supertails. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
